import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { toast } from "sonner";
import { IoIosTrash } from "react-icons/io";

function UseFirestore() {
  const addTodo = (collectionName, data) => {
    addDoc(collection(db, collectionName), { ...data, createdAt: new Date() })
      .then(() => {
        toast.success("Todo added successfully!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const deleteTodo = (collectionName, id) => {
    deleteDoc(doc(db, collectionName, id))
      .then(() => {
        toast.success("Deleted successfully!", {
          icon: <IoIosTrash size={18} color="white" />,
          style: {
            border: "1px solid  #92400E",
            background: " #92400E99",
            color: "white",
          },
          iconTheme: {
            primary: " white",
            secondary: "   #92400E ",
          },
        });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const updateTodo = (collectionName, id, title, deadline, setEdit) => {
    const todoRef = doc(db, collectionName, id);
    updateDoc(todoRef, {
      title,
      deadline: Number(deadline),
      date: new Date(),
    })
      .then(() => {
        setEdit(null)
        toast.success("Todo updated successfully!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return { addTodo, deleteTodo, updateTodo };
}

export default UseFirestore;
