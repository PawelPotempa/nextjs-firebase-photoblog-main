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
  addDoc,
  collection,
  doc,
  deleteDoc,
  getDocs,
  orderBy,
  query,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { generateUniqueFileName, uuidv4 } from "../utils/utilityMethods.js";

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
  const storageRef = ref(storage, generateUniqueFileName(fileName));
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
      const createdAt = Timestamp.now();
      await addDoc(collection(db, "posts"), {
        title: post.title,
        slug: `${post.slug.replace(/\s+/g, "-")}-${uuidv4().split("-")[0]}`,
        createdAt: JSON.stringify(createdAt.toMillis()),
        thumbnail: url,
        thumbnailAlt: post.thumbnailAlt,
        content: post.content,
      });
      console.log(url);
    }
  );
}

export async function createGallery(post, file, fileName) {
  const storageRef = ref(storage, generateUniqueFileName(fileName));
  console.log(storageRef);
  const uploadTask = uploadBytesResumable(storageRef, file);
  console.log(uploadTask);

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

// Pamietac zeby usunac to i zamienic z tym wyzej. Szkoda pamieci hehe.
export async function deleteGalleryItem(postId, slug) {
  await deleteDoc(doc(db, `posts/images/${slug}/${postId}`));
}

export async function updatePost(post, file, fileName, postId) {
  // Reach the post will be updated
  const updatedPost = doc(db, `/posts/${postId}`);
  //* Defines app behaviour if user change the post picture
  if (file !== null) {
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
        console.log(url);
        // const createdAt = serverTimestamp();
        await updateDoc(updatedPost, {
          title: post.title,
          createdAt: JSON.stringify(Timestamp.now().toMillis()),
          thumbnail: url,
          thumbnailAlt: post.thumbnailAlt,
          content: post.content,
        });
      }
    );
  } else {
    //* Defines app's behaviour if the picture stay the same
    //* thumbnail is not referenced on updateDoc to prevent errors
    await updateDoc(updatedPost, {
      title: post.title,
      content: post.content,
      thumbnailAlt: post.thumbnailAlt,
      slug: post.slug,
    });
  }
}

export async function getPosts() {
  // Initialize an empty array to retrieve results
  const result = [];
  try {
    // Query to retrieve posts where isOnline is true && order by most recent dates
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));

    const querySnapshots = await getDocs(q);
    querySnapshots.forEach((doc) => {
      result.push({ ...doc.data(), id: doc.id });
    });
  } catch (error) {
    console.log("Error getting documents: ", error);
  }
  return result;
}

export async function getImages() {
  // Initialize an empty array to retrieve results
  const result = [];
  try {
    // Query to retrieve posts where isOnline is true && order by most recent dates
    const q = query(collection(db, `posts/images/${slug}`));

    const querySnapshots = await getDocs(q);
    querySnapshots.forEach((doc) => {
      result.push({ ...doc.data(), id: doc.id });
    });
  } catch (error) {
    console.log("Error getting documents: ", error);
  }
  return result;
}

export async function getPostBySlug(slug) {
  let post = new Object();

  try {
    // Query to retrieve post with:
    // - where "slug" property is equal to slug passed parameter
    // - where onLine property is true (avoid to see unpublished posts)
    const q = query(collection(db, "posts"), where("slug", "==", slug));

    const querySnapshots = await getDocs(q);
    querySnapshots.forEach((doc) => {
      post = { ...doc.data(), id: doc.id };
    });
  } catch (err) {
    console.log("Error occured: ", err);
  }

  return post;
}
