import TaskItem from "./TaskItem";
import { useState, useEffect } from "react";
import RadioButton from "./RadioButton";

export default function Tasks(props) {
  const [tasksArray, setTasksArray] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const url = "https://louisiana-2c6b.restdb.io/rest/tasks";
  const options = {
    headers: {
      "x-apikey": "63925f89f43a573dae0953ee",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setTasksArray(data);
        setFilteredTasks(data);
      });
    // eslint-disable-next-line
  }, []);

  function filterByType(type) {
    setFilteredTasks(tasksArray.filter((task) => task.type === type));
  }

  return (
    <div>
      <div className="grid grid-cols-3 mt-4">
        {/* <button className="rounded-t-lg bg-light  p-0 sm:p-3 py-1">
          Opening
        </button>
        <button className="rounded-t-lg bg-darkerLight  p-0 sm:p-3 py-1">
          Daily
        </button>
        <button className="rounded-t-lg bg-darkerLight  p-0 sm:p-3 py-1">
          Closing
        </button> */}
        <RadioButton
          title="Opening"
          name={"tasktype"}
          value={"opening"}
          radioButtonFunction={filterByType}
          checked={false}
        />
        <RadioButton
          title="Daily"
          name={"tasktype"}
          value={"daily"}
          radioButtonFunction={filterByType}
          checked={true}
        />
        <RadioButton
          title="Closing"
          name={"tasktype"}
          value={"closing"}
          radioButtonFunction={filterByType}
          checked={false}
        />
      </div>
      <ul className="flex flex-col gap-6 bg-light px-2 lg:pl-2 xl:px-6 py-6">
        {filteredTasks
          .filter((task) => task.location === props.location && !task.isdone)
          .map((task) => (
            <TaskItem
              title={task.title}
              desc={task.desc}
              initials={task.initials}
              fullname={task.fullname}
              status={task.isdone}
            />
          ))}
      </ul>
      <ul className="bg-light py-6 lg:py-12 h-full">
        <h4 className="font-medium pl-6">Done</h4>
        {filteredTasks
          .filter((task) => task.location === props.location && task.isdone)
          .map((task) => (
            <TaskItem
              title={task.title}
              desc={task.desc}
              initials={task.initials}
              fullname={task.fullname}
              status={task.isdone}
            />
          ))}
      </ul>
    </div>
  );
}
