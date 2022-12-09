import Checkbox from "./Checkbox";
export default function TasksListItem(props) {
  return (
    <li className="lowercase">
      <div className="flex gap-4 items-center leading-4">
        <Checkbox />

        <div className="flex flex-col">
          <label for="orange-checkbox" className="text-sm font-medium">
            {props.title}
          </label>
          <span className="text-xs">{props.desc}</span>
        </div>
      </div>
    </li>
  );
}
