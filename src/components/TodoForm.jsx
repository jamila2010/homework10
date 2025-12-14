import UseFirestore from "../hooks/UseFirestore";
import { toast } from "sonner";

function TodoForm({ edit , title, setTitle, deadline, setDeadline, setEdit}) {
  const { addTodo, updateTodo } = UseFirestore();
  // console.log(edit);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !deadline) {
      toast.info("Please fill in all the fields!");

      return;
    }
    if(edit){
      updateTodo("mytodos", edit, title, deadline, setEdit)
      setEdit(null)
      setTitle("")
      setDeadline("")
      return
    }

    addTodo("mytodos", {
      title,
      deadline,
      date: new Date(),
    });
    // e.target.reset();
    setTitle("");
    setDeadline("");
  };

  return (
    <div className="flex flex-col gap-5 pb-20 pt-10 items-center pr-10 sm:flex-col-reverse ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 lg:p-10 md:p-10 sm:p-6 lg:w-150 md:w-150 sm:w-100  text-white font-bold bg-amber-800/30  h-auto bg-cover rounded "
      >
        <label className="flex flex-col gap-2 w-80 ">
          {/* bg-amber-800/50 */}
          <span>Task:</span>
          <input
            type="text"
            className="border py-1 px-2 outline-white rounded-lg lg:w-130 md:w-130 sm:w-90 "
            placeholder=" Create new todo "
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label className="flex flex-col gap-2 w-80 ">
          <span>Deadline:</span>
          <input
            type="date"
            inputMode="text"
            className="border py-1 px-2 outline-white rounded-lg  lg:w-130 md:w-130 sm:w-90 "
            value={deadline}
            onChange={(e) => {
              setDeadline(e.target.value);
            }}
          />
        </label>

        <button className="cursor-pointer border py-1 px-2  rounded-lg lg:w-130 md:w-130 sm:w-90 outline-white ">
         {edit? "Update": " Create"}
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
