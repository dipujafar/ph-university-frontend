
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Registetion from "../pages/Registetion";
import { routesGenerators } from "../utils/routesGenerator";
import { adminPath } from "./adminRoute";
import { facultyPath } from "./faculty.route";
import { studentPath } from "./stduent.route";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/admin",
        element: <App></App>,
        children: routesGenerators(adminPath)
    },
    {
        path: "/faculty",
        element: <App></App>,
        children: routesGenerators(facultyPath)
    },
    {
        path: "/student",
        element: <App></App>,
        children: routesGenerators(studentPath)
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