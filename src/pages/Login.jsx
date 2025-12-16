import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GetFormData } from "../requests";
import { useAuth } from "../hooks/useAuth";
import { toast } from "sonner";

function Login() {
  const { login, loading, error } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = GetFormData(e.target);
    login(data);
  };
  return (
    <div className="flex flex-col gap-5 py-20 items-center px-10 bg-amber-800/30 h-screen ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 p-10  text-amber-800/50 font-bold bg-[url('/image.png')] h-auto bg-cover rounded "
      >
        <label className="flex flex-col gap-2 w-80 ">
          <span>Email:</span>
          <input
            type="email"
            inputMode="email"
            className="border py-1 px-2 outline-white rounded-lg "
            placeholder="sdflkj@email"
            name="email"
          />
        </label>

        <label className="flex flex-col gap-2 w-80 ">
          <span>Password:</span>
          <input
            type="password"
            inputMode="password"
            className="border py-1 px-2 outline-white rounded-lg "
            placeholder="*******"
            name="password"
          />
        </label>

        {loading ? (
          <button
            disabled
            className="cursor-pointer border py-1 px-2  rounded-lg outline-white "
          >
            Loading...
          </button>
        ) : (
          <button className="cursor-pointer border py-1 px-2  rounded-lg outline-white ">
            Login
          </button>
        )}
        <p>
          <NavLink
            to={"/register"}
            className="flex items-center w-70 mx-auto text-center"
          >
            Haven't registered yet?{" "}
            <span className="ml-3 flex items-center">
              Register <FaArrowRight />{" "}
            </span>{" "}
          </NavLink>{" "}
        </p>
      </form>
    </div>
  );
}

export default Login;
