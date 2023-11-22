import { useContext } from "react";
import { RoutesMain } from "./routes/RoutesMain";
import { CustomerContext } from "./providers/CustomerContext";

function App() {
  const { loading } = useContext(CustomerContext);

  return (
    <div className="App">
      {loading ? <p>Carregando..</p> : <RoutesMain />}
    </div>
  );
}

export default App;