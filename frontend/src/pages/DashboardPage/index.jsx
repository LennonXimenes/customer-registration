import { useContext, useState } from "react";
import { CustomerContext } from "../../providers/CustomerContext";
import { ContactContext } from "../../providers/ContactContext";
import { ModalCreateContact } from "../../components/Modal/CreateContact";
import { ModalEditContact } from "../../components/Modal/EditContact";
import { ModalCustomer } from "../../components/Modal/EditCustomer";
import { Header } from "../../components/Header";
import { FontParagraph, FontTitle } from "../../styles/typograph";
import { StyledContainer } from "./style";

export const DashboardPage = () => {
    const { user } = useContext(CustomerContext);
    const { contact } = useContext(ContactContext);

    const [isOpenCustomer, setIsOpenCustomer] = useState(null);

    const [isOpenEdit, setIsOpenEdit] = useState(null);
    const [isOpenCreate, setIsOpenCreate] = useState(null);

    const [currentContact, setCurrentContact] = useState([]);
    const [nameContact, setNameContact] = useState([]);

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
        <>
            <Header setIsOpenCustomer={setIsOpenCustomer} />
            <StyledContainer>
                {isOpenEdit ? <ModalEditContact currentCont={currentContact} nameContact={nameContact} setIsOpenEdit={setIsOpenEdit}></ModalEditContact> : null}
                {isOpenCreate ? <ModalCreateContact currentCont={currentContact} setIsOpenCreate={setIsOpenCreate}></ModalCreateContact> : null}

                {isOpenCustomer ? <ModalCustomer user={user} setIsOpenCustomer={setIsOpenCustomer}></ModalCustomer> : null}


                <button onClick={() => openModalCreate()}>Criar contato</button>

                <ul>
                    {Array.isArray(contact) && contact?.length > 0 ? (
                        contact.map((currentCont, index) => (
                            <li onClick={() => openModalEdit(currentCont.id, { contName: currentCont.fullName }, currentCont)} key={index}>
                                <FontTitle>{currentCont?.fullName}</FontTitle>
                                <FontParagraph font={"big"}>{currentCont?.email}</FontParagraph>
                                <FontParagraph font={"big"}>{currentCont?.phone}</FontParagraph>
                            </li>
                        ))
                    ) : (
                        <FontTitle>Você não possui contatos cadastrados</FontTitle>
                    )}

                </ul>
            </StyledContainer >
        </>
    );
};