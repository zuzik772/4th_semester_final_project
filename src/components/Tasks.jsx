import TasksListItem from "./TasksListItem";
import TasksDoneItem from "./TasksDoneItem";

export default function Tasks() {
  return (
    <div>
      <div className="grid grid-cols-3 mt-4">
        <button className="rounded-t-lg bg-light  p-0 sm:p-3 py-1">Opening</button>
        <button className="rounded-t-lg bg-darkerLight  p-0 sm:p-3 py-1">Daily</button>
        <button className="rounded-t-lg bg-darkerLight  p-0 sm:p-3 py-1">Closing</button>
      </div>
      <ul className="flex flex-col gap-6 bg-light px-2 lg:pl-2 xl:px-6 py-6">
        <TasksListItem title="cleaning coffee machine" desc="see manual" />
        <TasksListItem title="cleaning coffee machine" desc="see manual" />
        <TasksListItem title="cleaning coffee machine" desc="see manual" />
      </ul>
      <div className="bg-light py-6 lg:py-12 h-full">
        <h4 className="font-medium pl-6">Done</h4>
        <TasksDoneItem title="cleaning coffee machine" desc="see manual" />
        <TasksDoneItem title="cleaning coffee machine" desc="see manual" />
      </div>
    </div>
  );
}
