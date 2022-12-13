import { useState } from "react";
import Menu from "./Menu";
export default function Profile(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-fadedBlue w-12 h-12 rounded-full flex items-center justify-center cursor-pointer absolute md:static top-6 right-6 hover:bg-fadedAccent">
      {props.userType === "admin" && (
        <button
          onClick={() => setToggle(!toggle)}
          className="font-bold text-xl"
        >
          BA
        </button>
      )}
      {props.userType === "employee" && (
        <button
          onClick={() => setToggle(!toggle)}
          className="font-bold text-xl"
        >
          JE
        </button>
      )}

      {toggle && (
        <Menu getLoginStatus={props.getLoginStatus} userType={props.userType} />
      )}
    </div>
  );
}
