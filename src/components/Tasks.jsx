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
  }, []);

  function filterByType(type) {
    setFilteredTasks(tasksArray.filter((task) => task.type === type));
  }

  function updateInDb(task) {
    const postData = JSON.stringify(task);
    fetch(url + "/" + task.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": "63925f89f43a573dae0953ee",
      },
      body: postData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetch(url, options)
          .then((response) => response.json())
          .then((data) => {
            setTasksArray(data);
            setFilteredTasks(data);
          });
      });
  }

  return (
    <div>
      <div className="flex items-center justify-evenly flex-wrap gap-1 mt-4 w-fit">
        <RadioButton
          title="Opening"
          name={"tasktype"}
          value={"opening"}
          radioButtonFunction={filterByType}
        />
        <RadioButton
          title="Daily"
          name={"tasktype"}
          value={"daily"}
          radioButtonFunction={filterByType}
        />
        <RadioButton
          title="Closing"
          name={"tasktype"}
          value={"closing"}
          radioButtonFunction={filterByType}
        />
      </div>
      <ul className="flex flex-col gap-6 bg-light px-2 lg:pl-2 xl:px-6 py-6 rounded-t-md">
        {filteredTasks
          .filter((task) => task.location === props.location && !task.isdone)
          .map((task) => (
            <TaskItem
              key={task._id}
              title={task.title}
              desc={task.desc}
              initials={task.initials}
              fullname={task.fullname}
              status={task.isdone}
              id={task._id}
              updateInDb={updateInDb}
              userType={props.userType}
            />
          ))}
      </ul>
      <ul className="bg-light py-6 lg:py-12 h-full rounded-b-md">
        <span className="font-medium pl-6">Done</span>
        {filteredTasks
          .filter((task) => task.location === props.location && task.isdone)
          .map((task) => (
            <TaskItem
              key={task._id}
              title={task.title}
              desc={task.desc}
              initials={task.initials}
              fullname={task.fullname}
              status={task.isdone}
              id={task._id}
              updateInDb={updateInDb}
              userType={props.userType}
            />
          ))}
      </ul>
    </div>
  );
}
