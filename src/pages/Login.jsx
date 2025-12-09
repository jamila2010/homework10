import { FaArrowRight } from "react-icons/fa"
import { NavLink } from "react-router-dom"

function Login() {
  return (
     <div className="flex flex-col gap-5 py-20 items-center px-10 bg-amber-800/30 h-screen ">
      <form className="flex flex-col gap-5 p-10  text-amber-800/50 font-bold bg-[url('/image.png')] h-auto bg-cover rounded ">
        <label className="flex flex-col gap-2 w-80 ">
          {/* bg-amber-800/50 */}
          <span>Name:</span>
          <input
            type="text"
            className="border py-1 px-2 outline-white rounded-lg  "
            placeholder=" Name"
          />
        </label>
        <label className="flex flex-col gap-2 w-80 ">
          <span>Email:</span>
          <input
            type="email"
            inputMode="email"
            className="border py-1 px-2 outline-white rounded-lg "
            placeholder="sdflkj@email"
          />
        </label>
        <label className="flex flex-col gap-2 w-80 ">
          <span>Number:</span>
          <input
            type="tel"
            inputMode="number"
            pattern="^\+?[0-9\s()-]{7,}$"
            className="border py-1 px-2 outline-white rounded-lg "
            placeholder="+998 999 99 99"
          />
        </label>
        <label className="flex flex-col gap-2 w-80 ">
          <span>Password:</span>
          <input
            type="password"
            inputMode="password"
            className="border py-1 px-2 outline-white rounded-lg "
            placeholder="*******"
          />
        </label>
        
        <button className="cursor-pointer border py-1 px-2  rounded-lg outline-white ">Login</button>
        <p ><NavLink to={"/register"} className="flex items-center w-70 mx-auto text-center" >Haven't registered  yet? <span className="ml-3 flex items-center">Register <FaArrowRight/> </span> </NavLink> </p>
       
      </form>
    </div>
  )
}

export default Login
