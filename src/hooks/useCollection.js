import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function useCollection(collectionName) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "mytodos"), (todoList) => {
      const todoData = todoList.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setData(todoData)
      console.log(todoData)
    });
    return () => unsubscribe();
  }, []);
  return { data };
}

export { useCollection };
