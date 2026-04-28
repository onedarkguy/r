import { useState } from "react";

function BudgetTracker() {
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);

  // Add Amount
  const addAmount = () => {
    if (amount.trim() === "") return;

    setList([...list, Number(amount)]);
    setAmount("");
  };

  // Delete Amount
  const deleteAmount = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  // Calculate Total
  let total = 0;
  list.forEach((item) => {
    total += item;
  });

  return (
    <div>
      <h2>Simple Budget Tracker</h2>

      <h3>Balance: ₹ {total}</h3>

      <input
        type="number"
        placeholder="Enter amount (+/-)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addAmount}>Add</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            ₹ {item}
            <button onClick={() => deleteAmount(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BudgetTracker;
