import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ErrorPage from "./pages/ErrorPage";
import { useContext } from "react";
import { useGlobalContext} from "./hooks/UseGlobalContext";


function App() {
  const {user} = useGlobalContext()
  const routes = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage user={user} />,
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/reg",
          element: <Register />,
        },
        {
          path: "/todos",
          element: <Todos />,
        },
      ],
    },
    {
      path: "/register",
      element: user ? <Navigate to={"/"} /> : <Register />,
    },
    {
      path: "/Login",
      element: user ? <Navigate to={"/"} /> : <Login />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
