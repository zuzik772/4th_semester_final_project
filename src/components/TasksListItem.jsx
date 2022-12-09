export default function TasksListItem(props) {
  return (
    <li className="lowercase">
      <div className="flex gap-4 leading-4">
        {/* <input type="checkbox" id="task" name="task" className="scale-150" /> */}
        <input
          checked
          id="orange-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-orange-500 bg-gray-100 rounded border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <div className="flex flex-col">
          <label
            for="orange-checkbox"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {props.title}
          </label>
          <span className="text-xs">{props.desc}</span>
        </div>
      </div>
    </li>
  );
}
