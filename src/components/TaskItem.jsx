import Checkbox from "./Checkbox";
import { useState, useEffect } from "react";
export default function TaskItem(props) {
  const [isDone, setIsDone] = useState(props.status);
  const [updatedTask, setUpdatedTask] = useState({});

  function getCheckboxState(state) {
    setIsDone(state);
  }

  function update() {
    if (!isDone) {
      if (props.userType === "admin") {
        setUpdatedTask({
          id: props.id,
          fullname: "Big Admin",
          initials: "BA",
          isdone: !isDone,
        });
      } else if (props.userType === "employee") {
        setUpdatedTask({
          id: props.id,
          fullname: "Just an Employee",
          initials: "JE",
          isdone: !isDone,
        });
      }
    } else {
      setUpdatedTask({
        id: props.id,
        fullname: "",
        initials: "",
        isdone: !isDone,
      });
    }
    console.log(isDone);
  }

  useEffect(() => {
    if (Object.keys(updatedTask).length) props.updateInDb(updatedTask);
    // eslint-disable-next-line
  }, [updatedTask]);

  return (
    <>
      {isDone ? (
        <li className="flex items-center justify-start gap-3 px-4 lg:px-8 py-2">
          <Checkbox
            isChecked={isDone}
            getCheckboxState={getCheckboxState}
            checkboxUpdated={update}
          />

          <label htmlFor="task" className="flex flex-grow flex-col line-through">
            {props.title} <span className="text-xs">{props.desc}</span>
          </label>
          {/* <span className="text-xs">{props.desc}</span> */}

          <span
            title={props.fullname}
            className="bg-fadedBlue w-6 h-6 p-2 rounded-full flex items-center justify-center cursor-pointerfont-bold text-xs font-medium cursor-pointer"
          >
            {props.initials}
          </span>
        </li>
      ) : (
        <li className="lowercase flex gap-4 items-center leading-4">
          <Checkbox
            isChecked={isDone}
            getCheckboxState={getCheckboxState}
            checkboxUpdated={update}
          />
          <label htmlFor="orange-checkbox" className="flex flex-col text-sm font-medium">
            {props.title}
            <span className="text-xs">{props.desc}</span>
          </label>
        </li>
      )}
    </>
  );
}
