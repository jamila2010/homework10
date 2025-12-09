import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <div className="flex flex-col gap-5 py-15 items-center px-10 bg-amber-800/30 h-screen ">
      <form className="flex flex-col gap-5 p-10  text-amber-800/50 font-bold bg-[url('/image.png')] h-auto bg-cover rounded ">
        <label className="flex flex-col gap-2 w-auto ">
          {/* bg-amber-800/50 */}
          <span>Name:</span>
          <input
            type="text"
            className="border py-1 px-2 outline-white rounded-lg  "
            placeholder=" Name"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Email:</span>
          <input
            type="email"
            inputMode="email"
            className="border py-1 px-2 outline-white rounded-lg "
            placeholder="sdflkj@email"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Number:</span>
          <input
            type="tel"
            inputMode="number"
            pattern="^\+?[0-9\s()-]{7,}$"
            className="border py-1 px-2 outline-white rounded-lg "
            placeholder="+998 999 99 99"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Password:</span>
          <input
            type="password"
            inputMode="password"
            className="border py-1 px-2 outline-white rounded-lg "
            placeholder="*******"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Photo:</span>
          <input
            type="file"
            accept="image/*"
            className="border py-1 px-2  rounded-lg outline-white"
          />
        </label>
        <button className="cursor-pointer border py-1 px-2  rounded-lg outline-white ">Register</button>
        <p className="w-60 mx-auto text-center flex "> <NavLink to={"/login"} className={"flex items-center text-center mx-auto "}> <span> Already registered? Login</span> <FaArrowRight/> </NavLink></p>
       
      </form>
    </div>
  );
}

export default Register;
