export default function TasksListItem(props) {
  return (
    <li className="lowercase">
      <div className="flex gap-4 leading-4">
        {/* <input type="checkbox" id="task" name="task" className="scale-150" /> */}
        <input
          id="orange-checkbox"
          type="checkbox"
          value=""
          className="scale-150 w-4 h-4 text-accent bg-gray-100 rounded border-2 border-accent hover:ring-accent ring-none"
        />
        <div className="flex flex-col">
          <label for="orange-checkbox" className="ml-2 text-sm font-medium">
            {props.title}
          </label>
          <span className="text-xs">{props.desc}</span>
        </div>
      </div>
    </li>
  );
}
