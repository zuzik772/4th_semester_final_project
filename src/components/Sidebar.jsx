import { Link } from "react-router-dom";
import dashboard from "../img/dashboard.png";
import deliveries from "../img/deliveries.png";
import trackers from "../img/trackers.png";
import posts from "../img/posts.png";
import manual from "../img/manual.png";
import stock from "../img/stock.png";
import { useState } from "react";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(true);

  function isPageActive(path) {
    setIsActive(path);
  }

  return (
    <div>
      <nav className="bg-light w-fit h-screen p-10">
        <ul className="flex flex-col gap-6">
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
            <Link to="/trackers" className={isActive ? "text-accent" : "text-dark"}>
              <img src={trackers} alt="trackers icon" />
              Trackers
            </Link>
            <span>Lost & Found</span>
            <span>Consent form</span>
            <span>Closing receipts</span>
            <span>Food waste</span>
            <span>Crashpad rental</span>
            <span>Cleaning shoes</span>
          </li>
          <li>
            <Link to="/stock" className={isActive ? "text-accent" : "text-dark"}>
              <img src={stock} alt="stock icon" />
              Inventory
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
