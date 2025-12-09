import { useState } from "react";
import UseFirestore from "../hooks/UseFirestore";

function TodoForm() {
  const { addTodo } = UseFirestore();
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo("todos", {
      title,
      deadline,
      date: new Date().toISOString(), // or use server timestamp
    });
    // Clear form
    setTitle("");
    setDeadline("");
    e.target.reset();
  };

  return (
    <div className="flex flex-col gap-5 pb-20 pt-10 items-center pr-10">
      <form
        onSubmit={handleSubmit} // Fixed
        className="flex flex-col gap-5 p-10 text-white font-bold bg-amber-800/30 h-auto bg-cover rounded"
      >
        <label className="flex flex-col gap-2 w-80">
          <span>Task:</span>
          <input
            type="text"
            value={title} // Added controlled input
            className="border py-1 px-2 outline-white rounded-lg"
            placeholder="Create new todo"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label className="flex flex-col gap-2 w-80">
          <span>Deadline:</span>
          <input
            type="date" // Changed to date input
            value={deadline} // Added controlled input
            className="border py-1 px-2 outline-white rounded-lg"
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </label>

        <button
          type="submit"
          className="cursor-pointer border py-1 px-2 rounded-lg outline-white"
        >
          Create
        </button>
      </form>
