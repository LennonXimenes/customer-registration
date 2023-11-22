import { useContext } from "react";
import { CustomerContext } from "../../providers/CustomerContext";

export const DashboardPage = () => {
    const { user, customerLogout } = useContext(CustomerContext);

    return (
        <main>
            <button onClick={() => customerLogout()}>Sair</button>
            <h1>{user.fullName}</h1>
            <p>{user.email}</p>
        </main>
    );
};