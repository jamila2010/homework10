import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { toast } from "sonner";

function UseFirestore() {
  const addTodo = ( collectionName, data ) => {
    addDoc(collection(db, collectionName), data)
      .then(() => {
        toast.success("Todo added successfully!");
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  const deleteTodo = () => {};
  const updateTodo = () => {};
  return { addTodo, deleteTodo, updateTodo };
}

export default UseFirestore;
