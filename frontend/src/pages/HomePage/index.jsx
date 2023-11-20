import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Clique para se cadastrar:</p>
            <Link to="register">Cadastrar</Link>
            <hr />
            <p>Ou acesse</p>
            <ul>
                <li>
                    <a href="https://github.com/LennonXimenes" target="_blank">Segue :D</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/lennon-ximenes/" target="_blank">Segue :D</a>
                </li>
            </ul>

        </div>
    );
}