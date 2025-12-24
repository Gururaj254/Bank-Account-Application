import { useState } from "react";
import { deposit } from "../api/accountService";

export default function DepositForm({ accountId, onUpdate }) {
  const [amount, setAmount] = useState("");

  const handleDeposit = async (e) => {
    e.preventDefault();
    if (!amount) return;
    await deposit(accountId, parseFloat(amount));
    setAmount("");
    onUpdate();
  };

  return (
    <form onSubmit={handleDeposit}>
      <input
        type="number"
        placeholder="Deposit Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Deposit</button>
    </form>
  );
}
