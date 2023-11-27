import { useContext, useState } from "react";
import { CustomerContext } from "../../providers/CustomerContext";
import { ContactContext } from "../../providers/ContactContext";
import { CreateContactForm } from "../../components/CreateContactForm";
import { DeletingBox } from "../../components/DeletingBox";
import { Modal } from "../../components/Modal";

export const DashboardPage = () => {
    const [isCreateOpen, setIsCreateOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(null);

    const { user, customerLogout } = useContext(CustomerContext);
    const { contact, updateContact, deleteContact } = useContext(ContactContext);

    const [isOpen, setIsOpen] = useState(null);
    const [currentContact, setCurrentContact] = useState([]);

    const openModal = (currentCont) => {
        setIsOpen(true);
        setCurrentContact(currentCont);
    };

    return (
        <main>
            <header>
                <button onClick={() => customerLogout()}>Sair</button>
                <h1>{user?.fullName}</h1>
                <p>{user?.email}</p>
            </header>

            {isOpen ? <Modal currentCont={currentContact} setCurrentContact={setCurrentContact} setIsOpen={setIsOpen}></Modal> : null}

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
                {Array.isArray(contact) && contact?.length > 0 ? (
                    contact.map((currentCont, index) => (
                        <li onClick={() => openModal(currentCont.id, currentCont)} key={index}>
                            <h3>{currentCont?.fullName}</h3>
                            <p>{currentCont?.email}</p>
                            <p>{currentCont?.phone}</p>
                            <button onClick={() => setIsDeleting(currentCont)}>Excluir</button>
                        </li>
                    ))
                ) : (
                    <p>Você não possui contatos cadastrados</p>
                )}

            </ul>
        </main >
    );
};

{/* 
                {Array.isArray(contact) && contact.map((currentCont) => (
                    <li key={currentCont.id}>
                        <h3>{currentCont.fullName}</h3>
                        <p>{currentCont.email}</p>
                        <p>{currentCont.phone}</p>
                        <button onClick={() => setIsDeleting(currentCont)}>Excluir</button>
                        <button onClick={() => setIsOpen(true)}>Editar</button>
                    </li>
                ))} */}