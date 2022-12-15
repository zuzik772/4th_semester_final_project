import { useRef, useState, useEffect } from "react";

export default function AmountInput(props) {
  const [amount, setAmount] = useState(props.amount);
  const amountRef = useRef();

  function changeAmount() {
    setAmount(amountRef.current.value)
    props.amountUpdated()
  }
  
  useEffect(() => {
    props.getAmount(amount)
    // eslint-disable-next-line
  }, [amount]);

  return (
    <input
    ref={amountRef}
      type="number"
      value={amount}
      onChange={changeAmount}
      className={
        "w-20 rounded-lg outline-none p-2 border-darkerLight hover:border-accent focus:border-accent focus:ring-0 dark:focus:ring-0"
      }
    />
  );
}
