import { useState, useEffect } from "react";
import { db, storage } from "../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";
import { useAuth } from "../hooks/AuthContext";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  const { currentUser } = useAuth();

  useEffect(() => {
    // The "if statement" below is used as a means of using that hook in the future. Previously it would immediately
    // crash due to no file being available, with the if statement it should work properly, and would probably be a much cleaner approach.
    if (file) {
      // References
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snap) => {
          let progressBar = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(progressBar);
        },
        (err) => {
          setError(err);
        },
        async () => {
          const url = await getDownloadURL(storageRef);
          const createdAt = serverTimestamp();
          const docRef = await addDoc(collection(db, "images"), {
            url,
            createdAt,
          });
          setUrl(url);
        }
      );
    }
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
