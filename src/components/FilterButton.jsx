export default function FilterButton(props) {
  return (
    <div className="border-x border-y border-accent px-2 rounded-xl w-28 hover:bg-fadedAccent cursor-pointer">
      <input type="radio" id="filter" name="filter" className="hidden" />
      <label htmlFor="filter" className="font-normal cursor-pointer">
        {props.title}
      </label>
    </div>
  );
}
