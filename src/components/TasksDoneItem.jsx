import TaskDoneIcon from "./icons/TaskDoneIcon";
export default function TasksDoneItem(props) {
  return (
    <div className="flex items-center justify-start gap-3 px-4 lg:px-8 py-2">
      <TaskDoneIcon />
      <div className="flex flex-col line-through opacity-50">
        <label htmlFor="task">{props.title}</label>
        <span className="text-xs">{props.desc}</span>
      </div>
      <span
        title="Agata Szulc"
        className="bg-fadedBlue w-6 h-6 p-2 rounded-full flex items-center justify-center cursor-pointerfont-bold text-xs font-medium cursor-pointer"
      >
        AS
      </span>
    </div>
  );
}
