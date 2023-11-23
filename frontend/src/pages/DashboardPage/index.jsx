import { useContext, useState } from "react";
import { CustomerContext } from "../../providers/CustomerContext";
import { ContactContext } from "../../providers/ContactContext";
import { CreateContactForm } from "../../components/CreateContactForm";

export const DashboardPage = () => {
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const { user, customerLogout } = useContext(CustomerContext);
    const { loading, contact, CreateContact } = useContext(ContactContext);

    return (
        <main>
            <header>
                <h1>{user?.fullName}</h1>
                <p>{user?.email}</p>
            </header>

            <button onClick={() => setIsCreateOpen(!isCreateOpen)}>
                {isCreateOpen ? "Fechar" : "Cadastrar contato"}
            </button>
            {isCreateOpen ? <CreateContactForm /> : null}
            <button onClick={() => customerLogout()}>Sair</button>
        </main>
    );
};