import { Link } from "react-router-dom";
import dashboard from "../img/dashboard.svg";
import deliveries from "../img/deliveries.svg";
import trackers from "../img/trackers.svg";
import posts from "../img/posts.svg";
import manual from "../img/manual.svg";
import stock from "../img/stock.svg";
import { useState } from "react";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(true);

  function isPageActive(path) {
    setIsActive(path);
  }

  console.log(isPageActive);

  return (
    <div>
      <nav className="bg-light w-fit h-screen p-10">
        <ul className="flex flex-col gap-8">
          <li>
            <Link to="/" className={isActive ? "text-accent" : "text-dark"}>
              <img src={dashboard} alt="dashboard icon" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/posts" className={isActive ? "text-accent" : "text-dark"}>
              <img src={posts} alt="posts icon" />
              Posts
            </Link>
          </li>
          <li>
            <Link to="/deliveries" className={isActive ? "text-accent" : "text-dark"}>
              <img src={deliveries} alt="deliveries icon" />
              Deliveries
            </Link>
          </li>
          <li>
            <Link to="/stock" className={isActive ? "text-accent" : "text-dark"}>
              <img src={stock} alt="stock icon" />
              Inventory
            </Link>
          </li>
          <li>
            <Link to="/trackers" className={isActive ? "text-accent" : "text-dark"}>
              <img src={trackers} alt="trackers icon" />
              Trackers
            </Link>
          </li>
          <li>
            <Link to="/manual" className={isActive ? "text-accent" : "text-dark"}>
              <img src={manual} alt="manual icon" />
              Manual
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
