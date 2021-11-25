import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import {
  collection,
  query,
  onSnapshot,
  where,
  getDocs,
} from "firebase/firestore";

const useSlugFetch = (slug) => {
  const [doc, setDoc] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "posts"), where("slug", "==", slug));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDoc(documents);
    });

    return () => unsubscribe();
  }, [collection]);

  return { doc };
};

export default useSlugFetch;
