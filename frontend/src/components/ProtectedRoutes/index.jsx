import { useContext } from "react"
import { CustomerContext } from "../../providers/CustomerContext"
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
    const { user } = useContext(CustomerContext);

    return user ? <Outlet /> : <Navigate to="/" />
};