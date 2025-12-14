import { FaArrowLeft } from "react-icons/fa"
import { NavLink } from "react-router-dom"


function ErrorPage({user}) {
  return (
    <div className="h-screen w-screen bg-[url(https://cdn.mos.cms.futurecdn.net/cXW8KbDZ6Pt8q39TK8c3gE.png)] bg-cover bg-no-repeat relative " >
      <h1 className="text-[22px] font-medium absolute left-207 top-116 " > <NavLink to={user? "/register" :"/"}  >Sorry, the page you are looking for cannot be found.</NavLink> </h1>
      <button className="w-100 bg-amber-700 text-white absolute left-215 top-129 rounded h-7 "> <NavLink to={user? "/register" :"/"} className={"flex items-center justify-center gap-2"}> <FaArrowLeft/> Go to {user? "Home": "Register"} page</NavLink>  </button>
    </div>
  )
}

export default ErrorPage
