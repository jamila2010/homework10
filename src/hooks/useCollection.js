import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, where , query,} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";


function useCollection(collectionName, uid) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const q = query(
      collection(db, collectionName),
      where("uid" , "==" ,uid ),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (todoList) => {
      const todoData = todoList.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setData(todoData);
      console.log(todoData);
    });
    return () => unsubscribe();
  }, [collectionName, uid]);
  return { data };
}

export { useCollection };
