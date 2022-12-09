import { useState } from "react";
export default function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(false);
  function changeCheckbox() {
    setIsChecked(!isChecked);
  }

  return (
    <input
      checked={isChecked}
      onClick={changeCheckbox}
      id="orange-checkbox"
      type="checkbox"
      value=""
      className="w-6 h-6 text-accent bg-gray-100 rounded border-2 border-accent hover:ring-accent focus:ring-light dark:focus:ring-light"
    />
  );
}
