import { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { StyledForm, StyledModal, StyledTitleButton } from "../style.js";
import { Input } from "../../Input/index.jsx";
import { toastError } from "../../Toast/index.js";
import { CustomerContext } from "../../../providers/CustomerContext.jsx";

export const ModalCustomer = ({ children, setIsOpenCustomer }) => {
    const { user, updateCustomer } = useContext(CustomerContext);
    const { handleSubmit } = useForm({});

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    const modalRef = useRef(null);


    useEffect(() => {
        function handleOutClick(e) {
            if (!modalRef.current?.contains(e.target)) {
                setIsOpenCustomer(false);
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
        setIsOpenCustomer(false);
        updateCustomer(formData);
    }

    return (
        <StyledModal role="dialog">
            <div ref={modalRef} className="container">

                <StyledTitleButton>
                    <h1>Editar</h1>
                    <button ref={buttonRef} onClick={() => setIsOpenCustomer(false)}>FECHAR</button>
                </StyledTitleButton>

                <StyledForm onSubmit={handleSubmit(submit)}>
                    <Input
                        label="Nome"
                        type="text"
                        placeholder="Nome"
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
                    <button type="submit" className="register">Confirmar</button>
                </StyledForm>
                {children}
            </div>
        </StyledModal >
    )
}