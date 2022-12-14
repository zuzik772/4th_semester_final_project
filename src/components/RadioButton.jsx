export default function RadioButton(props) {
  function handleChange() {
    props.radioButtonFunction(props.value);
  }

  return (
    // <div className="border-x border-y border-accent px-2 rounded-xl w-28 hover:bg-fadedAccent cursor-pointer">
      <>
        <input type="radio" id={props.name+"-"+props.value} name={props.name} value={props.value} onChange={handleChange} checked={props.checked}/>
        <label htmlFor={props.name+"-"+props.value} className="font-normal cursor-pointer">
          {props.title}
        </label>
      </>
    /* </div> */
  );
}
