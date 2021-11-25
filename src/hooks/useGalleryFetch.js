import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, query, onSnapshot, where } from "firebase/firestore";

const useGalleryFetch = (slug) => {
  const [gallery, setGallery] = useState(null);

  useEffect(() => {
    const q = query(collection(db, `posts/images/${slug}`));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setGallery(documents);
    });
    return () => unsubscribe();
  }, [collection]);

  return { gallery };
};

export default useGalleryFetch;
