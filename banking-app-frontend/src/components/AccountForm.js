import { useState } from "react";
import { createAccount } from "../api/accountService";

export default function AccountForm({ onAccountCreated }) {
  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const account = { accountHolderName: name, balance: parseFloat(balance) || 0 };
    const response = await createAccount(account);
    onAccountCreated(response.data);
    setName("");
    setBalance("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Account Holder Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Initial Balance"
        value={balance}
        onChange={(e) => setBalance(e.target.value)}
      />
      <button type="submit">Create Account</button>
    </form>
  );
}
