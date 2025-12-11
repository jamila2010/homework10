import { addDoc, collection, doc, deleteDoc } from "firebase/firestore";
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
          icon: < IoIosTrash size={18} color="white" />,
          style: {
            border: "1px solid  #92400E",
            background: " #92400E99",
            color: "white"
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
  const updateTodo = () => {};
  return { addTodo, deleteTodo, updateTodo };
}

export default UseFirestore;
