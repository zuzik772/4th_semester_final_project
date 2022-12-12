import { useState } from "react";

import Menu from "./Menu";
export default function Profile(props) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-fadedBlue w-12 h-12 rounded-full flex items-center justify-center cursor-pointer absolute md:static top-6 right-6 hover:bg-fadedAccent">
      <button onClick={() => setToggle(!toggle)} className="font-bold text-xl">
        AS
      </button>

      {toggle && <Menu setIsLoggedIn={props.setIsLoggedIn} />}
    </div>
  );
}
