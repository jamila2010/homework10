import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GetFormData } from "../requests";
import { useState } from "react";
import { toast } from "sonner";

function Register() {
  const [file, setFile] = useState("");
  const [url, setUrl] = useState("");

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
         console.log(imageURL)
    };
  };
  return (
    <div className="flex flex-col gap-5 py-15 items-center px-10 bg-amber-800/30 h-screen ">
      <form
        className="flex flex-col gap-5 p-10  text-amber-800/50 font-bold bg-[url('/image.png')] h-auto bg-cover rounded "
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col gap-2 w-auto ">
          {/* bg-amber-800/50 */}
          <span>Name:</span>
          <input
            type="text"
            className="border py-1 px-2 outline-white rounded-lg  "
            placeholder=" Name"
            name="name"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Email:</span>
          <input
            type="email"
            inputMode="email"
            className="border py-1 px-2 outline-white rounded-lg "
            placeholder="sdflkj@email"
            name="email"
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
            name="phone"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Password:</span>
          <input
            type="password"
            inputMode="password"
            className="border py-1 px-2 outline-white rounded-lg "
            placeholder="*******"
            name="password"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Photo:</span>
          <input
            type="file"
            accept="image/*"
            className="border py-1 px-2  rounded-lg outline-white"
            name="photo"
            onChange={handleChange}
          />
        </label>
        <button className="cursor-pointer border py-1 px-2  rounded-lg outline-white ">
          Register
        </button>
        <p className="w-60 mx-auto text-center flex ">
          {" "}
          <NavLink
            to={"/login"}
            className={"flex items-center text-center mx-auto "}
          >
            {" "}
            <span> Already registered? Login</span> <FaArrowRight />{" "}
          </NavLink>
        </p>
      </form>
    </div>
  );
}

export default Register;
