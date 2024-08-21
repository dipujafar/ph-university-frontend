import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";

export const facultyPath = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <FacultyDashboard></FacultyDashboard>
    },
    {
        name: "Offered Course",
        path: "offerd-course",
        element: <OfferedCourse></OfferedCourse>
    },
];
