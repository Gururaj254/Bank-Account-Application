import { useState, useEffect } from "react";
import { getAllAccounts, deleteAccount } from "../api/accountService";
import DepositForm from "./DepositForm";
import WithdrawForm from "./WithdrawForm";

export default function AccountList() {
  const [accounts, setAccounts] = useState([]);

  const fetchAccounts = async () => {
    const response = await getAllAccounts();
    setAccounts(response.data);
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  const handleDelete = async (id) => {
    await deleteAccount(id);
    fetchAccounts();
  };

  return (
    <div>
      <h2>Accounts</h2>
      {accounts.map((acc) => (
        <div key={acc.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <p>ID: {acc.id}</p>
          <p>Name: {acc.accountHolderName}</p>
          <p>Balance: {acc.balance}</p>
          <DepositForm accountId={acc.id} onUpdate={fetchAccounts} />
          <WithdrawForm accountId={acc.id} onUpdate={fetchAccounts} />
          <button onClick={() => handleDelete(acc.id)}>Delete Account</button>
        </div>
      ))}
    </div>
  );
}
