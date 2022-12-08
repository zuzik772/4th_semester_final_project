import { Link } from "react-router-dom";
import dashboard from "../img/dashboard.svg";
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
      <nav className="static sm:sticky sm:top-0 bg-light w-full sm:w-56 sm:h-screen p-2 sm:p-8">
        <ul className="flex sm:flex-col gap-2 sm:gap-6 ">
          <div className="grid sm:flex sm:flex-col gap-2 sm:gap-6 ">
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
              <Link to="/manual" className={isActive ? "text-accent" : "text-dark"}>
                <img src={manual} alt="manual icon" />
                Manual
              </Link>
            </li>
          </div>
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
        </ul>
      </nav>
    </div>
  );
}
