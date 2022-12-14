export default function AmountInput(props) {
  return (
    <input
      type="number"
      defaultValue={props.amount}
      className={
        "w-20 rounded-lg outline-none p-2 border-darkerLight hover:border-accent focus:border-accent focus:ring-0 dark:focus:ring-0"
      }
    />
  );
}
