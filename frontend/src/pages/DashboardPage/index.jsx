import { useContext, useState } from "react";
import { CustomerContext } from "../../providers/CustomerContext";
import { ContactContext } from "../../providers/ContactContext";
import { CreateContactForm } from "../../components/CreateContactForm";
import { DeletingBox } from "../../components/DeletingBox";

export const DashboardPage = () => {
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const { user, customerLogout } = useContext(CustomerContext);
    const { loading, customer, contact, CreateContact, deleteContact } = useContext(ContactContext);
    const [isDeleting, setIsDeleting] = useState(null);

    return (
        <main>
            <header>
                <button onClick={() => customerLogout()}>Sair</button>
                <h1>{user?.fullName}</h1>
                <p>{user?.email}</p>
            </header>

            <button onClick={() => setIsCreateOpen(!isCreateOpen)}>
                {isCreateOpen ? "Fechar" : "Cadastrar contato"}
            </button>
            {isCreateOpen ? <CreateContactForm /> : null}
            {isDeleting ? (
                <DeletingBox
                    trueCallback={async () => {
                        await deleteContact(isDeleting.id)
                        setIsDeleting(null);
                    }}
                    falseCallback={() => setIsDeleting(null)}>
                    <p>Tem certeza que deseja excluir este contato?</p>
                </DeletingBox>
            ) : null}

            <ul>
                {Array.isArray(contact) && contact.map((currentCont) => (
                    <li key={currentCont.id}>
                        <h3>{currentCont.fullName}</h3>
                        <p>{currentCont.email}</p>
                        <p>{currentCont.phone}</p>
                        <button onClick={() => setIsDeleting(currentCont)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </main>
    );
};