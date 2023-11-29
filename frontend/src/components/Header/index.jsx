import { StyledBoxHeader, StyledHeader } from "./style";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { FontParagraph, FontTitle } from "../../styles/typograph";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { CustomerContext } from "../../providers/CustomerContext";

export const Header = ({ setIsOpenCustomer }) => {
    const { user, customerLogout } = useContext(CustomerContext);

    const location = useLocation();

    const openModalCustomer = () => {
        setIsOpenCustomer(true);
    }

    function home() {
        return location.pathname === "/";
    }

    function register() {
        return location.pathname === "/register";
    }

    function dashboard() {
        return location.pathname === "/dashboard";
    }

    return (
        <StyledHeader>
            <FontTitle>Contato Central</FontTitle>
            {(!dashboard() && (home() || register())) ? (
                <div>
                    <ul>
                        <li>
                            <a href="https://github.com/LennonXimenes" target="_blank" className="linkIcon"><AiFillGithub size={28} /></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/lennon-ximenes/" target="_blank" className="linkIcon"><AiOutlineLinkedin size={28} /></a>
                        </li>
                    </ul>
                </div>
            ) : (
                <StyledBoxHeader>
                    <div className="box">
                        <FontTitle>{user?.fullName}</FontTitle>
                        <FontParagraph font="big">{user?.email}</FontParagraph>
                    </div>
                    <div className="boxBtn">
                        <button onClick={() => openModalCustomer()}>Editar perfil</button>
                        <button onClick={() => customerLogout()}>Sair</button>
                    </div>
                </StyledBoxHeader>
            )}
        </StyledHeader>
    );
};
