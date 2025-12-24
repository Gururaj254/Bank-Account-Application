import AccountForm from "./components/AccountForm";
import AccountList from "./components/AccountList";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => setRefresh(!refresh);

  return (
    <div className="App">
      <h1>🏦 Banking App</h1>
      <AccountForm onAccountCreated={handleRefresh} />
      <AccountList key={refresh} />
    </div>
  );
}

export default App;
