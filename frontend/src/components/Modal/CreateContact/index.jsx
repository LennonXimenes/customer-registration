import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { useContext, useEffect, useRef, useState } from "react";
import { CustomerContext } from "../../../providers/CustomerContext";
import { ContactContext } from "../../../providers/ContactContext";
import { StyledForm, StyledModal, StyledTitleButton } from "../style";
import { toastError } from "../../Toast";
import { AiFillCloseSquare } from "react-icons/ai";
import { FontTitle } from "../../../styles/typograph";


export const ModalCreateContact = ({ children, setIsOpenCreate }) => {
    const { handleSubmit } = useForm();
    const { CreateContact } = useContext(ContactContext);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const modalRef = useRef(null);

    useEffect(() => {
        function handleOutClick(e) {
            if (!modalRef.current?.contains(e.target)) {
                setIsOpenCreate(false);
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
        let formData = {};
        if (fullName && email && phone) {
            if (fullName.length < 3) {
                return toastError("O nome precisa conter mais de 3 caracteres");
            } else if (!email.includes("@") || !email.includes(".com")) {
                return toastError("O email precisa seguir o padrão exemplo@mail.com");
            } else if (phone.length < 11) {
                return toastError("O telefone deve conter 11 caracteres");
            } else {
                formData = { fullName, email, phone };
                setIsOpenCreate(false);
                CreateContact(formData);
            }
        } else {
            return toastError("Por favor, preencha todos os campos");
        }
    }

    return (
        <StyledModal role="dialog">
            <div ref={modalRef} className="container">

                <StyledTitleButton>
                    <FontTitle>Cadastrar Contato</FontTitle>
                    <button ref={buttonRef} onClick={() => setIsOpenCreate(false)}><AiFillCloseSquare size={30} color={"#212529"} /></button>
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
                    <button type="submit" className="register">Confirmar</button>
                </StyledForm>
                {children}
            </div>
        </StyledModal >
    );
};