import { useContext, useState } from "react";
import { CustomerContext } from "../../providers/CustomerContext";
import { ContactContext } from "../../providers/ContactContext";
import { ModalCreateContact } from "../../components/Modal/CreateContact";
import { ModalEditContact } from "../../components/Modal/EditContact";
import { ModalCustomer } from "../../components/Modal/EditCustomer";

export const DashboardPage = () => {
    const { user, customerLogout } = useContext(CustomerContext);
    const { contact } = useContext(ContactContext);

    const [isOpenCustomer, setIsOpenCustomer] = useState(null);

    const [isOpenEdit, setIsOpenEdit] = useState(null);
    const [isOpenCreate, setIsOpenCreate] = useState(null);

    const [currentContact, setCurrentContact] = useState([]);
    const [nameContact, setNameContact] = useState([]);

    const openModalCustomer = () => {
        setIsOpenCustomer(true);
    }

    const openModalEdit = (currentCont, contName) => {
        setIsOpenEdit(true);
        setCurrentContact(currentCont);
        setNameContact(contName);
    };

    const openModalCreate = (currentCont) => {
        setIsOpenCreate(true);
        setCurrentContact(currentCont);
    };

    return (
        <main>
            {isOpenEdit ? <ModalEditContact currentCont={currentContact} nameContact={nameContact} setIsOpenEdit={setIsOpenEdit}></ModalEditContact> : null}
            {isOpenCreate ? <ModalCreateContact currentCont={currentContact} setIsOpenCreate={setIsOpenCreate}></ModalCreateContact> : null}

            {isOpenCustomer ? <ModalCustomer user={user} setIsOpenCustomer={setIsOpenCustomer}></ModalCustomer> : null}

            <header>
                <button onClick={() => openModalCustomer()}>Editar perfil</button>
                <button onClick={() => customerLogout()}>Sair</button>
                <h1>{user?.fullName}</h1>
                <p>{user?.email}</p>
            </header>

            <button onClick={() => openModalCreate()}>Criar contato</button>

            <ul>
                {Array.isArray(contact) && contact?.length > 0 ? (
                    contact.map((currentCont, index) => (
                        <li onClick={() => openModalEdit(currentCont.id, { contName: currentCont.fullName }, currentCont)} key={index}>
                            <h3>{currentCont?.fullName}</h3>
                            <p>{currentCont?.email}</p>
                            <p>{currentCont?.phone}</p>
                        </li>
                    ))
                ) : (
                    <p>Você não possui contatos cadastrados</p>
                )}

            </ul>
        </main >
    );
};