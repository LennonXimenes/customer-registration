import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { DashboardPage } from "../pages/DashboardPage";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { PublicRoutes } from "../components/PublicRoutes";
import { ContactProvider } from "../providers/ContactContext";

export const RoutesMain = () => {

    return (
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>

            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard"
                    element={
                        <ContactProvider>
                            < DashboardPage />
                        </ContactProvider>
                    }
                />
            </Route>
        </Routes >
    );
};