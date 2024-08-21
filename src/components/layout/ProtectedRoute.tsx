import { ReactNode } from "react";
import { useCurrentToken } from "../../redux/feature/auth/authSlice";
import { useAppSelector } from "../../redux/hook";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}: {children: ReactNode}) => {

    const token = useAppSelector(useCurrentToken);
    if(!token){
        return <Navigate to={"/login"} replace></Navigate>
    }
    return children;
};

export default ProtectedRoute;