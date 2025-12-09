import { FaTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";

function TodoList({ todos }) {
    const [done, setDone] = useState([])
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
 const handleDone=(id)=>{
setDone((prev)=>{
return prev.includes(id)?
 prev.filter((item)=>{
return item!==id
}): [...prev, id]
})
 }


  return (
    <div className="ml-6 cursive ">
        <h1 className="ml-6 font-bold text-[25px] font3d text-amber-900 ">Todos</h1>
      {todos.map(({ id, title, date, deadline }) => {
        const deadlineDay = deadline.toDate().getDate();
        const deadlineMonth = deadline.toDate().getMonth();
        const day = date.toDate().getDate();
        const month = date.toDate().getMonth();
        const hours = date.toDate().getHours();
        const minutes = date.toDate().getMinutes();
        const time = `${
          hours < 10 && minutes < 10
            ? "0" + hours + ":" + "0" + minutes
            : hours < 10 && minutes >= 10
            ? hours + ":" + minutes
            : hours >= 10 && minutes < 10
            ? hours + ":" + "0" + minutes
            : hours + ":" + minutes
        }  `;
        return (
          <div className="flex items-center gap-3 ml-6 relative group "  key={id} >
            <input
              type="checkbox"
              className="accent-amber-800 w-3.5 h-3.5 border-amber-700 "
              onClick={() => {
                handleDone(id);
              }}
            /> 
            <div
             
              className={done.includes(id) ? `line-through w-[500px] px-5 py-3 cursor-pointer mb-5 border-b-2 border-amber-900`:`w-[500px] bg-amber-800/30  px-5 py-3 cursor-pointer mb-5 border-b-2 border-amber-900` }
            >
              <p className="text-[10px] italic  ">
                Created at:
                {day >= 11 && day <= 13
                  ? months[month] + day + "th" + time
                  : day % 10 == 1
                  ? months[month] + day + "st" + time
                  : day % 10 == 2
                  ? months[month] + day + "nd" + time
                  : day % 10 == 3
                  ? months[month] + day + "rd" + time
                  : months[month] + day + "th" + time}{" "}
              </p>
              <div className="flex justify-between gap-1">
                <h1 className="font-medium text-[18px] ">Task:{title} </h1>
                <p className="italic">
                  Deadline:
                  {deadlineDay < 10
                    ? "0" + deadlineDay + "." + months[deadlineMonth]
                    : deadlineDay + "." + months[deadlineMonth]}{" "}
                </p>
              </div>
            </div>
            <button className="opacity-0 group-hover:opacity-100 hover:rotate-12 text-amber-800 hover:text-red-800 hover:scale-115 hover:translate-2 transition-translate duration-300">
              <FaTrashAlt />{" "}
            </button>
            <button className="opacity-0 group-hover:opacity-100 text-[23px] hover:translate-2 transition-translate duration-300 text-amber-800 hover:text-red-800 hover:scale-115  ">
              <CiEdit />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
