import { RegisterForm } from "../../components/RegisterForm";
import { Link } from "react-router-dom";


export const RegisterPage = () => {
    return (
        <div>
            <Link to="/">voltar</Link>

            <h1>Register Page</h1>
            <RegisterForm />
        </div>
    );
}