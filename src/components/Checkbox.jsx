import { useState } from "react";
export default function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(props.isChecked);
  function toggleCheckbox() {
    setIsChecked(!isChecked);
  }

  return (
    <input
      checked={isChecked}
      onChange={toggleCheckbox}
      id="orange-checkbox"
      type="checkbox"
      value=""
      className="w-6 h-6 text-accent bg-gray-100 rounded border-2 border-accent hover:ring-accent focus:ring-0 dark:focus:ring-0"
    />
  );
}
