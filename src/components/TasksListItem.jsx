export default function TasksListItem(props) {
  return (
    <li className="lowercase">
      <div className="flex gap-4 leading-4">
        <input type="checkbox" id="task" name="task" className="scale-150" />
        <div className="flex flex-col">
          <label htmlFor="task">{props.title}</label>
          <span className="text-xs">{props.desc}</span>
        </div>
      </div>
    </li>
  );
}
