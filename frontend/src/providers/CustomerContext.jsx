import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { api } from "../../src/services";

export const CustomerContext = createContext({});

export const CustomerProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const currentPath = window.location.pathname

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN");
        const id = localStorage.getItem("@CUSTOMERID");
        const loadCustomer = async () => {
            setLoading(true);
            try {
                const { data } = await api.get(`/customer/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(data);
                navigate(currentPath);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            };
        };
        if (token && id) {
            loadCustomer();
        };
    }, []);

    const navigate = useNavigate();

    const customerRegister = async (formData) => {
        try {
            await api.post("/customer", formData);
            console.log("Cadastro realizado com sucesso!");
            navigate("/");
        } catch (error) {
            console.log(error);
        };
    };

    const customerLogin = async (formData, setLoading) => {
        try {
            setLoading(true);
            const { data } = await api.post("/login", formData);
            localStorage.setItem("@TOKEN", data.token);
            localStorage.setItem("@CUSTOMERID", data.customer.id);
            setUser(data.customer);
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        };
    };

    const customerLogout = () => {
        localStorage.clear();
        setUser(null);
        navigate("/");
    };

    return (
        <CustomerContext.Provider value={{ user, customerRegister, customerLogin, customerLogout, loading }}>
            {children}
        </CustomerContext.Provider>
    );
};