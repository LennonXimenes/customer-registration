import { CustomerProvider } from "./providers/CustomerContext";
import { RoutesMain } from "./routes/RoutesMain";

function App() {
  return (
    <div className="App">
      <CustomerProvider>
        <RoutesMain />
      </CustomerProvider>
    </div>
  );
}

export default App;