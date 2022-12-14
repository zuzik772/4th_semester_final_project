import { useRef } from "react";
import "../global.css";
export default function Dropdown(props) {
  const locationRef = useRef();

  function changeLocation() {
    props.getLocation(locationRef.current.value);
  }

  return (
    <div className="flex gap-2 items-center">
      <label htmlFor="gym" className="text-light font-normal hidden md:block">
        Your current location is:
      </label>
      <select
        ref={locationRef}
        id="gym"
        className="hidden md:block minimal rounded-xl py-1 bg-light font-medium border-2 outline-none border-none cursor-pointer "
        defaultValue={props.location}
        onChange={changeLocation}
      >
        <option value="west">Beta West</option>
        <option value="south">Beta South</option>
      </select>
    </div>
  );
}
