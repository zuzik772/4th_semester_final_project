import { useEffect } from "react";
import { useState } from "react";
export default function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(props.isChecked);
  function toggleCheckbox() {
    setIsChecked(!isChecked);
    props.checkboxUpdated();
  }

  useEffect(() => {
    props.getCheckboxState(isChecked);
    // eslint-disable-next-line
  }, [isChecked]);

  return (
    <input
      checked={isChecked}
      onChange={toggleCheckbox}
      type="checkbox"
      className="w-4 h-4 sm:w-6 sm:h-6 text-accent bg-gray-100 rounded border-2 border-accent hover:ring-accent focus:ring-0 dark:focus:ring-0"
    />
  );
}
