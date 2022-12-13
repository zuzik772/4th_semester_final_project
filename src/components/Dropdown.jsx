import "../global.css";
export default function Dropdown(props) {
  return (
    <div className="flex gap-2 items-center">
      <label htmlFor="gym" className="text-light font-normal hidden md:block">
        Location:
      </label>
      <select
        id="gym"
        className="hidden md:block minimal rounded-xl py-1 bg-light font-medium border-2 outline-none border-none cursor-pointer "
        defaultValue={props.location}
        >
        <option value="west" >
          Beta West
        </option>
        <option value="south">Beta South</option>
      </select>
    </div>
  );
}
