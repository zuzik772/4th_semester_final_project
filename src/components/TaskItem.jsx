import Checkbox from "./Checkbox";
import { useState } from "react";
export default function TaskItem(props) {
  const [isDone, setIsDone] = useState(props.status)

  function getCheckboxState(state) {
    setIsDone(state)
  }

  return (
    <>
      {isDone ? (
        <li className="flex items-center justify-start gap-3 px-4 lg:px-8 py-2">
          <Checkbox isChecked={isDone} getCheckboxState={getCheckboxState}/>
          <div className="flex flex-col line-through opacity-50">
            <label htmlFor="task">{props.title}</label>
            <span className="text-xs">{props.desc}</span>
          </div>
          <span
            title={props.fullname}
            className="bg-fadedBlue w-6 h-6 p-2 rounded-full flex items-center justify-center cursor-pointerfont-bold text-xs font-medium cursor-pointer"
          >
            {props.initials}
          </span>
        </li>
      ) : (
        <li className="lowercase">
          <div className="flex gap-4 items-center leading-4">
            <Checkbox isChecked={isDone} getCheckboxState={getCheckboxState}/>

            <div className="flex flex-col">
              <label htmlFor="orange-checkbox" className="text-sm font-medium">
                {props.title}
              </label>
              <span className="text-xs">{props.desc}</span>
            </div>
          </div>
        </li>
      )}
    </>
  );
}
