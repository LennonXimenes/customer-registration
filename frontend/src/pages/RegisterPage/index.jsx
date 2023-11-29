import { RegisterForm } from "../../components/RegisterForm";
import { Header } from "../../components/Header";
import { StyledBox, StyledMain } from "../HomePage/styled";

export const RegisterPage = () => {
    return (
        <StyledBox>
            <Header />
            <StyledMain>
                <div>
                    <RegisterForm />
                </div>
            </StyledMain>
        </StyledBox>
    );
}