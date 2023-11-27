import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { StyledForm, StyledModal, StyledTitleButton } from "../Modal/style.js";
import { Input } from "../Input/index.jsx";
import { ContactContext } from "../../providers/ContactContext.jsx";
import { toastError } from "../Toast/index.js";

export const Modal = ({ children, setIsOpen, currentCont, setCurrentContact }) => {
    const { contact, updateContact, deleteContact } = useContext(ContactContext);
    const { handleSubmit } = useForm({});

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const modalRef = useRef(null);

    useEffect(() => {
        function handleOutClick(e) {
            if (!modalRef.current?.contains(e.target)) {
                setIsOpen(false);
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
        console.log(formData)
        setIsOpen(false);
        updateContact(formData, currentCont)
    }

    return (
        <StyledModal role="dialog">
            <div ref={modalRef} className="container">

                <StyledTitleButton>
                    <h1>Cadastrar Tecnologia</h1>
                    <button ref={buttonRef} onClick={() => setIsOpen(false)}>FECHAR</button>
                </StyledTitleButton>

                <StyledForm onSubmit={handleSubmit(submit)}>
                    <Input
                        label="Nome Completo"
                        type="text"
                        placeholder="Seu nome completo"
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
                    <button type="submit" className="register">Confirmar</button>
                </StyledForm>
                {children}
            </div>
        </StyledModal >
    )
}