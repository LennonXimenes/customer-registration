import { createContext, useEffect, useState } from "react";
import { api } from "../services";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
    const [contact, setContact] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem("@TOKEN");
        const id = localStorage.getItem("@CUSTOMERID");
        const loadContact = async () => {
            try {
                setLoading(true)
                const { data } = await api.get(`/customer/${id}/contacts`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setContact(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            };
        };
        loadContact();
    }, []);

    const CreateContact = async (formData) => {
        const token = localStorage.getItem("@TOKEN");
        const id = localStorage.getItem("@CUSTOMERID");
        try {
            const { data } = await api.post(`/contact/${id}`, formData);
            console.log(data);
        } catch (error) {
            console.error(error);
        };
    };


    return (
        <ContactContext.Provider value={{ loading, contact, CreateContact }}>
            {children}
        </ContactContext.Provider>
    );
};