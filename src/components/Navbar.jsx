import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../hooks/UseGlobalContext";

function Navbar() {
  const {user} = useGlobalContext()
  return (
    <header>
      <div className="flex justify-between py-3 container mx-auto px-20">
        <Link className="font-bold font3d text-2xl text-amber-900 " to={"/"}>
          {" "}
          Todo List
        </Link>

        {user && (
          <nav className="flex items-center ">
            <NavLink className="w-20 items-center flex justify-center" to={"/"}>
              Home
            </NavLink>
            <NavLink
              className="w-20 items-center flex justify-center"
              to={"/todos"}
            >
              Todos
            </NavLink>
          </nav>
        )}
        {!user && (
          <nav className="flex items-center ">
            <NavLink
              className="w-20 items-center flex justify-center"
              to={"/login"}
            >
              Login
            </NavLink>
            <NavLink
              className="w-20 items-center flex justify-center"
              to={"/register"}
            >
              Register
            </NavLink>
          </nav>
        )}
        {user && (
          <div className="flex items-center gap-5">
            <p>Hello, {user.displayName} </p>
            <img
              src={user.photoURL}
              alt="user"
              className="w-12 rounded-full "
            />
            <button
              className="px-3 py-2 rounded-xl bg-red-100 text-red-600
transition duration-300
hover:bg-red-200 hover:shadow-lg hover:scale-105 active:scale-90"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
