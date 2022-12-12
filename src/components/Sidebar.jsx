import { Link } from "react-router-dom";
import dashboard from "../img/dashboard.svg";
import deliveries from "../img/deliveries.png";
import trackers from "../img/trackers.png";
import posts from "../img/posts.png";
import manual from "../img/manual.png";
import inventory from "../img/stock.png";
import { useState } from "react";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(true);

  function isPageActive(path) {
    setIsActive(path);
  }

  return (
    <div>
      <nav className="static sm:sticky sm:top-0 bg-light w-full sm:w-56 sm:h-screen p-2 sm:p-8">
        <ul className="flex sm:flex-col gap-2 sm:gap-6 ">
          <div className="grid sm:flex sm:flex-col gap-2 sm:gap-6 ">
            <li>
              <Link to="/dashboard" className={isActive ? "text-accent" : "text-dark"}>
                <img src={dashboard} alt="dashboard icon" />
                Dashboard
              </Link>
              <span className="hidden md:block lowercase text-xs text-left">get an overview</span>
            </li>

            <li>
              <Link to="/deliveries" className={isActive ? "text-accent" : "text-dark"}>
                <img src={deliveries} alt="deliveries icon" />
                Deliveries
              </Link>
              <span className="hidden md:block lowercase text-xs text-left">see what's coming</span>
            </li>

            <li>
              <Link to="/inventory" className={isActive ? "text-accent" : "text-dark"}>
                <img src={inventory} alt="inventory icon" />
                Inventory
              </Link>
              <span className="hidden md:block lowercase text-xs text-left">
                see what's missing
              </span>
            </li>
            <li>
              <Link to="/manual" className={isActive ? "text-accent" : "text-dark"}>
                <img src={manual} alt="manual icon" />
                Manual
              </Link>
              <span className="hidden md:block lowercase text-xs text-left">get an answer</span>
            </li>
            <li>
              <Link to="/posts" className={isActive ? "text-accent" : "text-dark"}>
                <img src={posts} alt="posts icon" />
                Posts
              </Link>
              <span className="hidden md:block lowercase text-xs text-left">
                see the latest news
              </span>
            </li>
          </div>
          <li>
            <Link to="/trackers" className={isActive ? "text-accent" : "text-dark"}>
              <img src={trackers} alt="trackers icon" />
              Trackers
            </Link>
            <span className="hidden md:block lowercase text-xs text-lef mb-2">update the data</span>
            <span>Cleaning shoes</span>
            <span>Closing receipts</span>
            <span>Consent form</span>
            <span>Crashpad rental</span>
            <span>Food waste</span>
            <span>Lost & Found</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
