import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { SuccessPage } from "../pages/SuccessPage";
import { DashboardPage } from "../pages/DashboardPage";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { PublicRoutes } from "../components/PublicRoutes";

export const RoutesMain = () => {

    return (
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/success" element={<SuccessPage />} />
            </Route>

            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
        </Routes >
    );
};