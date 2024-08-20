
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Registetion from "../pages/Registetion";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { adminRoutes } from "./adminRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/admin",
        element: <App></App>,
        children: adminRoutes,
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/registation",
        element: <Registetion></Registetion>
    }
]);
export default router;