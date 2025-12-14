import { useCollection } from "../hooks/useCollection";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import { useState, useEffect } from "react";

function Todos() {
  const { data: todos } = useCollection("mytodos");
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [edit, setEdit] = useState("");
  const handleEdit = (todo) => {
    setEdit(todo.id);
    setTitle(todo.title);
    setDeadline(todo.deadline);
  };
  useEffect(() => {
    if (!edit) {
      setTitle("");
      setDeadline("");
    }
  }, [edit]);
  return (
    <div className="flex justify-between px-6 lg:flex-row text-amber-900  bg-amber-800/10 pt-10 h-screen sm:flex-col-reverse ">
      <div className="flex flex-col gap-2  ">
        {todos && (
          <TodoList
            todos={todos}
            edit={edit}
            handleEdit={handleEdit}
            title={title}
            setTitle={setTitle}
            setCancel={() => {
              setEdit("");
            }}
          />
        )}
      </div>
      <div>
        <h1 className="font-bold text-2xl font3d cursor-pointer">New todo:</h1>
        <TodoForm
          edit={edit}
          handleEdit={handleEdit}
          title={title}
          setTitle={setTitle}
          deadline={deadline}
          setDeadline={setDeadline}
          setEdit={setEdit}
        />
      </div>
    </div>
  );
}

export default Todos;
