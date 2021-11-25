import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import { useAuth } from "../../src/hooks/AuthContext";
import useSlugFetch from "../../src/hooks/useSlugFetch";
import useGalleryFetch from "../../src/hooks/useGalleryFetch";
import { deletePost, createGallery } from "../../src/config/firebase";

const PostPage = () => {
  const router = useRouter();
  const { currentUser } = useAuth();

  const { doc } = useSlugFetch(router.query.slug);

  const { gallery } = useGalleryFetch(router.query.slug);

  console.log(gallery);

  const [files, setFiles] = useState(null);

  if (!doc) {
    return null;
  }

  if (!gallery) {
    return null;
  }

  const changeHandler = (e) => {
    let selected = e.target.files;

    if (selected) {
      setFiles(selected);

      // setTypeError("");
    } else {
      setFiles(null);
      // setTypeError("Please select an image file (png or jpg)");
    }
  };

  // TO DO!!! REMEMBER!!! Delete object from inside the array to make the procedure more economical.

  const uploadImages = () => {
    for (let i = 0; i < files.length; i++) {
      createGallery(doc[0], files[i], files[i].name)
        .then(() => {
          // Update the isLoading state and navigate to the home page.
          // setIsLoading(false);
        })
        .catch((err) => {
          // Alert the error and update the isLoading state.
          alert(err);
          // setIsLoading(false);
        });
    }
    // router.push("/");
  };

  const handleRender = () => {
    if (gallery.length === 0) {
      return null;
    } else {
      return gallery.map((p) => console.log(p.url));
    }
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      {doc.map((post) => (
        <article key={post.slug}>
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            loading="eager"
            layout="fixed"
            height={500}
            width={1000}
          />
          <div>
            <h2>{post.title}</h2>
            {/* <span>{post.timestamp.toDate().toDateString()}</span> */}
            <p>{post.content}</p>
          </div>
        </article>
      ))}
      {gallery.map((g) => (
        <img src={g.url}></img>
      ))}
      {handleRender}
      <button
        onClick={() => {
          const shouldDeletePost = confirm(
            "Are you sure you want to delete this post ?"
          );
          if (shouldDeletePost) {
            deletePost(doc[0].id).then(() => {
              router.push("/");
            });
          }
        }}
      ></button>
      <form>
        <div>
          <label htmlFor="coverImage">Gallery Images</label>
          <input
            id="coverImage"
            type="file"
            multiple
            accept="image/*"
            onChange={changeHandler}
          />
        </div>
      </form>
      <button
        // onClick={() => {
        //   for (let i = 0; i < files.length; i++) {
        //     console.log(
        //       files[i].name +
        //         " has been uploaded to the storage and saved in the firestore database." +
        //         ` ${i + 1}/${files.length} files have been uploaded.`
        //     );
        //   }
        // }}
        onClick={uploadImages}
      >
        KLIKNIJ
      </button>
      <button
        onClick={() => {
          console.log(gallery);
        }}
      >
        KLIKNIJ SZYBKO
      </button>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const post = await getPostBySlug(context.query.slug);

//   return {
//     props: {
//       post,
//     },
//   };
// }

export default PostPage;
