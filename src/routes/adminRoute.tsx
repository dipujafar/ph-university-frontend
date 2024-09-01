import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import AcademicSemester from "../pages/admin/AcademicSemester";
import CreateAcademicSemester from "../pages/admin/CreateAcademicSemester";




export const adminPath  = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <AdminDashboard></AdminDashboard>
    },
    {
        name: "Academic  Management",
        children: [
            {
                name: "Academic-semester",
                path: "academic-semster",
                element: <AcademicSemester></AcademicSemester>
            },
            {
                name: "Create A. Semester",
                path: "create-academic-semester",
                element: <CreateAcademicSemester></CreateAcademicSemester>
            }
        ]
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create User",
                path: "create-user",
                element: <CreateStudent></CreateStudent>
            },
            {
                name: "Create Admin",
                path: "create-admin",
                element: <CreateAdmin></CreateAdmin>
            },
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: <CreateFaculty></CreateFaculty>
            }
        ]
    }
];



