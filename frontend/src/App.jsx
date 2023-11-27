import { useContext } from "react";
import { RoutesMain } from "./routes/RoutesMain";
import { CustomerContext } from "./providers/CustomerContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { loading } = useContext(CustomerContext);

  return (
    <div className="App">
      {loading ? <p>Carregando..</p> : <RoutesMain />}
      <ToastContainer />
    </div>
  );
}

export default App;