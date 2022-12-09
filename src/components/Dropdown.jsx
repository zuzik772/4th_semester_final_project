import "../global.css";
export default function Dropdown() {
  return (
    <select
      name="gym"
      id="gym"
      className="hidden md:block minimal rounded-xl py-1 font-medium border-2 outline-none border-fadedBlue hover:border-b-4 "
    >
      <option value="west" defaultValue>
        Beta West
      </option>
      <option value="south">Beta South</option>
    </select>
  );
}
