export default function AmountInput(props) {
  return (
    
    <input
      type="number"
      amount={props.amount}
      className={
        "w-20 outline-none text-dark border-accent rounded-md  focus:ring-darkerLight dark:focus:ring-darkerLight"
      }
    />
  );
}
