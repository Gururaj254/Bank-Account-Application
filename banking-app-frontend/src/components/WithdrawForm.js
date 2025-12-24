import { useState } from "react";
import { withdraw } from "../api/accountService";

export default function WithdrawForm({ accountId, onUpdate }) {
  const [amount, setAmount] = useState("");

  const handleWithdraw = async (e) => {
    e.preventDefault();
    if (!amount) return;
    try {
      await withdraw(accountId, parseFloat(amount));
      setAmount("");
      onUpdate();
    } catch (err) {
      alert(err.response?.data?.message || "Error withdrawing amount");
    }
  };

  return (
    <form onSubmit={handleWithdraw}>
      <input
        type="number"
        placeholder="Withdraw Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Withdraw</button>
    </form>
  );
}
