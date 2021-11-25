import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import {
  getFirestore,
  serverTimestamp,
  collection,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Due to NextJS being a SSR platform, we need to make sure that we don't get two instances of the same firebase,
// which might sometimes happen. We do that by using a singleton pattern.
// More info about singleton pattern can be found here: https://robdodson.me/posts/javascript-design-patterns-singleton/
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth();

export const storage = getStorage(app);

export const db = getFirestore();

export async function createPost(post, file, fileName) {
  const storageRef = ref(storage, fileName);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snap) => {
      let progressBar = (snap.bytesTransferred / snap.totalBytes) * 100;
      console.log("Upload is" + progressBar + "% done");
    },
    (err) => {
      switch (error.code) {
        case "storage/unknown":
          alert("Une erreur inconnue est survenue, réessayer plus tard");
          break;
        case "storage/unauthorized":
          alert("Vous n'êtes pas autorisé à réaliser cette action");
          break;
        case "storage/retry-limit-exceeded":
          alert("Temps limite de l'opération atteint. Essayez plus tard");
          break;
      }
    },
    async () => {
      const url = await getDownloadURL(storageRef);
      const createdAt = serverTimestamp();
      await addDoc(collection(db, "posts"), {
        createdAt,
        title: post.title,
        slug: post.slug,
        coverImage: url,
        coverImageAlt: post.coverImageAlt,
        content: post.content,
      });
      console.log(url);
    }
  );
}

export async function createGallery(post, file, fileName) {
  const storageRef = ref(storage, fileName);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snap) => {
      let progressBar = (snap.bytesTransferred / snap.totalBytes) * 100;
      console.log("Upload is" + progressBar + "% done");
    },
    (err) => {
      switch (error.code) {
        case "storage/unknown":
          alert("Une erreur inconnue est survenue, réessayer plus tard");
          break;
        case "storage/unauthorized":
          alert("Vous n'êtes pas autorisé à réaliser cette action");
          break;
        case "storage/retry-limit-exceeded":
          alert("Temps limite de l'opération atteint. Essayez plus tard");
          break;
      }
    },
    async () => {
      const url = await getDownloadURL(storageRef);
      // const createdAt = serverTimestamp();
      await addDoc(collection(db, `posts/images/${post.slug}`), {
        url,
      });
      // console.log(url);
    }
  );
}

export async function deletePost(postId) {
  await deleteDoc(doc(db, `posts/${postId}`));
}

export async function updatePost(post, file, fileName, postId) {
  // Reach the post will be updated
  const updatedPost = doc(db, `/posts/${postId}`);
  console.log(typeof file);
  //* Defines app behaviour if user change the post picture
  if (typeof file !== "object") {
    // Create a reference to the correct distant repository
    const imagesStorageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(imagesStorageRef, file);

    uploadTask.on(
      "state_changed",
      (snap) => {
        let progressBar = (snap.bytesTransferred / snap.totalBytes) * 100;
        console.log("Upload is" + progressBar + "% done");
        switch (snap.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unknown":
            alert("Une erreur inconnue est survenue, réessayer plus tard");
            break;
          case "storage/unauthorized":
            alert("Vous n'êtes pas autorisé à réaliser cette action");
            break;
          case "storage/retry-limit-exceeded":
            alert("Temps limite de l'opération atteint. Essayez plus tard");
            break;
        }
      },
      async () => {
        const url = await getDownloadURL(imagesStorageRef);
        const createdAt = serverTimestamp();
        await updateDoc(updatedPost, {
          createdAt,
          title: post.title,
          content: post.content,
          coverImage: url,
          coverImageAlt: post.coverImageAlt,
          slug: post.slug,
        });
      }
    );
  } else {
    //* Defines app's behaviour if the picture stay the same
    //* coverImage is not referenced on updateDoc to prevent errors
    await updateDoc(updatedPost, {
      title: post.title,
      content: post.content,
      coverImageAlt: post.coverImageAlt,
      slug: post.slug,
    });
  }
}
