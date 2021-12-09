import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useAuth } from "../../src/hooks/AuthContext";
import useSlugFetch from "../../src/hooks/useSlugFetch";
import useGalleryFetch from "../../src/hooks/useGalleryFetch";
import {
  deletePost,
  deleteGalleryItem,
  createGallery,
  getPosts,
  getPostBySlug,
} from "../../src/config/firebase";
import {
  ArticleWrapper,
  PostWrapper,
  PostTitle,
  PostContent,
  SPContainer,
  SPDesc,
  SPDate,
  SPGallery,
  SPPhoto,
  SPGalleryItem,
  BigImg,
  TempImg,
  EditPost,
  EditPostIcon,
  DeletePost,
  DeletePostIcon,
  AddPost,
  AddPostLabel,
  AddPostIcon,
  SPDelete,
} from "../../styles/singlepostElements";
import { MdClose } from "react-icons/md";

const PostPage = ({ post }) => {
  const router = useRouter();
  const { currentUser } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState(null);
  const [bigImg, setBigImg] = useState(false);
  const [tempImg, setTempImg] = useState("");

  // Fetch gallery data from Firestore.
  const { gallery } = useGalleryFetch(router.query.slug);

  // Actively listening for changes in the "files" state, if there are any - attempt to upload images to firebase storage.
  useEffect(() => {
    if (files !== null) {
      for (let i = 0; i < files.length; i++) {
        createGallery(post, files[i], files[i].name)
          .then(() => {
            // Update the isLoading state and navigate to the blog page.
            setIsLoading(false);
          })
          .catch((err) => {
            // Alert the error and update the isLoading state.
            alert(err);
            setIsLoading(false);
          });
      }
    }
  }, [files]);

  // Failsafe. If either one doesn't get fetched immediately, we return null.
  if (!post || !gallery) {
    return null;
  }

  // Check if post 'Object' receives one or more property
  const postLength = Object.keys(post).length;

  // If post is empty, redirect to 404
  if (postLength === 0 && typeof window !== "undefined") {
    router.push("/404");
    return;
  }

  // Handle servor error "Cannot read property of..."
  // If post has no property, return null to redirect user
  if (postLength === 0) {
    return null;
  }

  // Handle all the changes made to file input.
  const changeHandler = (e) => {
    let selected = e.target.files;

    if (selected) {
      setFiles(selected);
    } else {
      setFiles(null);
      alert("Please select an image file (png or jpg)");
    }
  };

  const displayImages = gallery.map((g, index) => {
    return (
      // It's important that EACH child in an array has a unique "key" prop.
      <SPGalleryItem key={g.slug}>
        <SPPhoto src={g.url} onClick={() => getImg(g.url)} />
        {currentUser && (
          <SPDelete
            onClick={() => {
              const shouldDeletePost = confirm(
                "Are you sure you want to delete this post ?"
              );
              if (shouldDeletePost) {
                deleteGalleryItem(gallery[index].id, router.query.slug);
              }
            }}
          >
            USUN
          </SPDelete>
        )}
      </SPGalleryItem>
    );
  });

  const getImg = (image) => {
    setTempImg(image);
    setBigImg((prev) => !prev);
  };

  return (
    <ArticleWrapper>
      <PostWrapper key={post.slug}>
        <Image
          src={post.thumbnail}
          alt={post.thumbnailAlt}
          loading="eager"
          objectFit="cover"
          height={1000}
          width={3000}
        />
        <PostTitle>{post.title}</PostTitle>
        <PostContent>{post.content}</PostContent>
      </PostWrapper>
      <SPContainer>
        <>
          <BigImg bigImg={bigImg}>
            <TempImg src={tempImg} onClick={() => setBigImg((prev) => !prev)} />
            <MdClose onClick={() => setBigImg((prev) => !prev)} />
          </BigImg>
          <SPGallery>{displayImages}</SPGallery>
        </>
      </SPContainer>
      {currentUser && (
        <EditPost href={`/edit/${router.query.slug}`}>
          <EditPostIcon />
        </EditPost>
      )}
      {currentUser && (
        <DeletePost
          onClick={() => {
            const shouldDeletePost = confirm(
              "Are you sure you want to delete this post ?"
            );
            if (shouldDeletePost) {
              deletePost(post.id).then(() => {
                router.push("/blog");
              });
            }
          }}
        >
          <DeletePostIcon />
        </DeletePost>
      )}
      {currentUser && (
        <>
          <AddPostLabel>
            <AddPost
              id="thumbnail"
              type="file"
              multiple
              accept="image/*"
              onChange={changeHandler}
            ></AddPost>
            <AddPostIcon />
          </AddPostLabel>
        </>
      )}
    </ArticleWrapper>
  );
};

export async function getStaticPaths() {
  const posts = await getPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}

// Generates props for the post page
export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}

export default PostPage;
