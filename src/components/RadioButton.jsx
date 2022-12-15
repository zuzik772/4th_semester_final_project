export default function RadioButton(props) {
  function handleChange() {
    props.radioButtonFunction(props.value);
  }

  return (
    // flex gap-1 items-center justify-center border-x border-y border-accent px-2 py-1 rounded-xl w-fit  hover:bg-fadedAccent cursor-pointer
    <div className="relative flex gap-1 items-center justify-center w-28 h-8 rounded-2xl hover:bg-fadedAccent">
      <input
        type="radio"
        id={props.name + "-" + props.value}
        name={props.name}
        value={props.value}
        onChange={handleChange}
        className="text-accent focus:ring-0 dark:focus:ring-0 opacity-80"
      />
      <label htmlFor={props.name + "-" + props.value} className="font-normal cursor-pointer">
        {props.title}
      </label>
    </div>
  );
}
