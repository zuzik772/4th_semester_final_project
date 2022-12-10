export default function FilterButton(props) {
  return (
    <div className="border-x border-y border-accent px-2 rounded-xl w-28">
      <input type="radio" id="filter" name="filter" className="hidden" />
      <label for="filter" className="font-normal">
        {props.title}
      </label>
    </div>
  );
}
