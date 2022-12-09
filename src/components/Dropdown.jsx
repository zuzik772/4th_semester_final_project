import "../global.css";
export default function Dropdown() {
  return (
    <select
      name="gym"
      id="gym"
      className="minimal rounded-xl py-1 px-4 font-medium border-2 outline-none border-accent hover:border-b-4 absolute top-8 right-24"
    >
      <option value="west" selected>
        Beta West
      </option>
      <option value="south">Beta South</option>
    </select>
  );
}
