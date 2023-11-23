import { createContext, useEffect, useState } from "react";
import { api } from "../services";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
    const [customer, setCustomer] = useState([]);
    const [contact, setContact] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN");
        const id = localStorage.getItem("@CUSTOMERID");
        const loadContact = async () => {
            try {
                setLoading(true)
                const { data } = await api.get(`/customer/${id}/contacts`);
                setContact(data.contacts);
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
            const { data: newContact } = await api.post(`/contact/${id}`, formData);
            // console.log(newContact); // Visualizar o novo contato criado
            // console.log(customer); // Dono
            // console.log(contact); // Contato add pelo Dono
            setContact((prevContacts) => [...prevContacts, newContact]);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteContact = async (id) => {
        try {
            await api.delete(`/contact/${id}`);
            setContact((contact) => contact.filter(contactId => contactId.id !== id));
        } catch (error) {
            console.error(error);
        };
    };

    return (
        <ContactContext.Provider value={{ loading, customer, contact, CreateContact, deleteContact }}>
            {children}
        </ContactContext.Provider>
    );
};