import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GetFormData } from "../requests";

function Login() {
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    formDataValues = GetFormData(e.target);

    const data = GetFormData(e.target.files);
    console.log(data)

    if (!file) {
      toast.error("Image isn't recieved. Try again.");
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const basedata = reader.result.split(",")[1];
      const formData = new FormData();
      formData.append("key", "70b80c130fc3bc538ade42813a7a1346");
      formData.append("image", basedata);

      try {
        const res = await fetch("https://api.imgbb.com/1/upload", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        const imageURL = data.data.url;
        console.log({...formDataValues, imageURL})
      } catch (err) {
        console.log(err.message);
      }
    };
    console.log(imageURL)
  };
  return (
    <div className="flex flex-col gap-5 py-20 items-center px-10 bg-amber-800/30 h-screen ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 p-10  text-amber-800/50 font-bold bg-[url('/image.png')] h-auto bg-cover rounded "
      >
        <label className="flex flex-col gap-2 w-80 ">
          {/* bg-amber-800/50 */}
          <span>Name:</span>
          <input
            type="text"
            className="border py-1 px-2 outline-white rounded-lg  "
            placeholder=" Name"
            name="name"
          />
        </label>
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

        <button className="cursor-pointer border py-1 px-2  rounded-lg outline-white ">
          Login
        </button>
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
