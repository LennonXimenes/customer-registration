import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { StyledForm, StyledModal, StyledTitleButton } from "../style.js";
import { Input } from "../../Input/index.jsx";
import { ContactContext } from "../../../providers/ContactContext.jsx";
import { toastError } from "../../Toast/index.js";
import { FontTitle } from "../../../styles/typograph.js";
import { AiFillCloseSquare } from "react-icons/ai";


export const ModalEditContact = ({ children, setIsOpenEdit, currentCont, nameContact }) => {
    const { contact, updateContact, deleteContact } = useContext(ContactContext);
    const { handleSubmit } = useForm({});

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const modalRef = useRef(null);


    useEffect(() => {
        function handleOutClick(e) {
            if (!modalRef.current?.contains(e.target)) {
                setIsOpenEdit(false);
            }
        }
        window.addEventListener("mousedown", handleOutClick);

        return () => {
            window.removeEventListener("mousedown", handleOutClick);
        }
    }, []);

    const buttonRef = useRef(null);

    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === "Escape") {
                buttonRef.current?.click();
            }
        }
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, []);

    const submit = () => {
        let formData = {}
        if (fullName) {
            if (fullName.length < 3) {
                return toastError("O nome precisa conter mais de 3 caracteres");
            }
            formData.fullName = fullName
        }
        if (email) {
            if (!email.includes("@") || !email.includes(".com")) {
                return toastError("O email precisa seguir o padrão exemplo@mail.com");
            }
            formData.email = email
        }
        if (phone) {
            if (phone.length < 11) {
                return toastError("O telefone deve conter 11 caracteres");
            }
            formData.phone = phone
        }
        setIsOpenEdit(false);
        updateContact(formData, currentCont);
    }

    const exclude = () => {
        deleteContact(currentCont)
    }

    return (
        <StyledModal role="dialog">
            <div ref={modalRef} className="container">

                <StyledTitleButton>
                    <FontTitle>Editar {nameContact.contName}</FontTitle>
                    <button ref={buttonRef} onClick={() => setIsOpenEdit(false)}><AiFillCloseSquare size={30} color={"#212529"} /></button>
                </StyledTitleButton>

                <StyledForm onSubmit={handleSubmit(submit)}>
                    <Input
                        label="Nome"
                        type="text"
                        placeholder="Nome do contato"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />

                    <Input
                        label="E-mail"
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        label="Telefone"
                        type="text"
                        placeholder="Telefone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        maxLength={11}
                    />

                    <div>
                        <button type="submit" className="register">Confirmar</button>
                        <button type="submit" onClick={() => exclude()} className="delete">Excluir</button>
                    </div>
                </StyledForm>
                {children}
            </div>
        </StyledModal >
    )
}