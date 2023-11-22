import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { api } from "../../src/services";

export const CustomerContext = createContext({});

export const CustomerProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const customerRegister = async (formData) => {
        try {
            await api.post("/customer", formData);
            console.log("Cadastro realizado com sucesso!");
        } catch (error) {
            console.log(error);
        };
    };

    const customerLogin = async (formData) => {
        try {
            const { data } = await api.post("/login", formData);
            localStorage.setItem("@TOKEN", data.token);
            localStorage.setItem("@USERID", data.customer.id);
            setUser(data.customer);
            navigate("/dashboard");
        } catch (error) {
            console.error(error);

        }
    };

    const customerLogout = () => {
        localStorage.clear();
        setUser(null);
        navigate("/");
    };

    return (
        <CustomerContext.Provider value={{ user, customerRegister, customerLogin, customerLogout }}>
            {children}
        </CustomerContext.Provider>
    );
};