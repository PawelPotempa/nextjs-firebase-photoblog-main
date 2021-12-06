import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

const useFirestore = (col) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, col), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });
    return () => unsubscribe();
  }, [collection]);

  return { docs };
};

export default useFirestore;
