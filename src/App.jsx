import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from './pages/Register'
import MainLayout from "./layout/MainLayout"
import About from './pages/About'
import Home from "./pages/Home"
import Todos from './pages/Todos'
import Login from "./pages/Login"

function App() {
    const routes= createBrowserRouter([
      {
        path:"/",
        element: <MainLayout/>,
        children:[
          {
             index: true,
             element:<Home/>
          },
           {
            path:"/reg",
            element: <Register/>
          },
          {
            path:"/todos",
            element: <Todos/>
          }
        ]
      },
       {
            path:"/register",
            element: <Register/>
          },
           {
            path:"/Login",
            element: <Login/>
          },
    ])
  return <RouterProvider router={routes} />
}

export default App
