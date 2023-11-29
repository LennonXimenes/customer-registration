import { LoginForm } from "../../components/LoginForm";
import { Header } from "../../components/Header";
import { StyledBox, StyledMain } from "./styled"

export const HomePage = () => {
    return (
        <StyledBox>
            <Header />
            <StyledMain>
                <div>
                    <LoginForm />
                </div>
            </StyledMain>
        </StyledBox>
    );
}