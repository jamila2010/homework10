import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'


function MainLayout() {
  return (
   <>
   <Navbar/>
   <main>
    <Outlet/>
   </main>
   <footer>
    <Footer/>
   </footer>
   </>
  )
}

export default MainLayout
