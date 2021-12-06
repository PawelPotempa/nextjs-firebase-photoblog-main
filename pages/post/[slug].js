import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import { useAuth } from "../../src/hooks/AuthContext";
import useSlugFetch from "../../src/hooks/useSlugFetch";
import useGalleryFetch from "../../src/hooks/useGalleryFetch";
import { deletePost, createGallery } from "../../src/config/firebase";
import {
  SPContainer,
  SPDesc,
  SPDate,
  SPGallery,
  SPPhoto,
  SPGalleryItem,
  BigImg,
  TempImg,
} from "../../styles/singlepostElements";
import { MdClose } from "react-icons/md";

const PostPage = () => {
  const router = useRouter();
  const { currentUser } = useAuth();

  // Fetch document data from Firestore.
  const { doc } = useSlugFetch(router.query.slug);
  // Fetch image gallery data from Firestore.
  const { gallery } = useGalleryFetch(router.query.slug);

  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState(null);
  const [bigImg, setBigImg] = useState(false);
  const [tempImg, setTempImg] = useState("");

  // Failsafe. If either one doesn't get fetched immediately, we return null.
  if (!doc || !gallery) {
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

  // Attempt to upload multiple images to Firebase Storage.
  const uploadImages = () => {
    for (let i = 0; i < files.length; i++) {
      createGallery(doc[0], files[i], files[i].name)
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
  };

  const displayImages = gallery.map((g) => {
    return (
      // It's important that EACH child in an array has a unique "key" prop.
      <SPGalleryItem key={g.slug} onClick={() => getImg(g.url)}>
        <SPPhoto src={g.url} />
      </SPGalleryItem>
    );
  });

  const displayPost = doc.map((p) => {
    return (
      <article key={p.slug}>
        <Image
          src={p.coverImage}
          alt={p.coverImageAlt}
          loading="eager"
          layout="fixed"
          height={500}
          width={1000}
        />
        <div>
          <h2>{p.title}</h2>
          {/* <span>{post.timestamp.toDate().toDateString()}</span> */}
          <p>{p.content}</p>
        </div>
      </article>
    );
  });

  const getImg = (image) => {
    setTempImg(image);
    console.log(image);
    setBigImg((prev) => !prev);
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      {displayPost}
      {currentUser && <a href={`/edit/${router.query.slug}`}>EDIT</a>}
      {currentUser && (
        <button
          onClick={() => {
            const shouldDeletePost = confirm(
              "Are you sure you want to delete this post ?"
            );
            if (shouldDeletePost) {
              deletePost(doc[0].id).then(() => {
                router.push("/blog");
              });
            }
          }}
        >
          Delete
        </button>
      )}
      <form>
        <div>
          {currentUser && (
            <input
              id="coverImage"
              type="file"
              multiple
              accept="image/*"
              onChange={changeHandler}
            />
          )}
        </div>
      </form>
      {currentUser && <button onClick={uploadImages}>Upload</button>}
      <SPContainer>
        <>
          <BigImg bigImg={bigImg}>
            <TempImg src={tempImg} onClick={() => setBigImg((prev) => !prev)} />
            <MdClose onClick={() => setBigImg((prev) => !prev)} />
          </BigImg>
          <SPGallery>{displayImages}</SPGallery>
        </>
      </SPContainer>
    </div>
  );
};

export default PostPage;
