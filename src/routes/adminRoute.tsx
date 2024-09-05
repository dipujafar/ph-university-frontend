import AdminDashboard from "../pages/admin/academicManagement/AdminDashboard";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAcademicSemester from "../pages/admin/academicManagement/CreateAcademicSemester";




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
                name: "Create Student",
                path: "create-student",
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



