import { Link } from "react-router-dom";
import dashboard from "../img/dashboard.svg";
import deliveries from "../img/deliveries.png";
import trackers from "../img/trackers.png";
import posts from "../img/posts.png";
import inventory from "../img/stock.png";
import { useState } from "react";
export default function Sidebar(props) {
  const [position, setPosition] = useState("dashboard");

  return (
    <div>
      <nav className="static sm:sticky sm:top-0 bg-lighterGrey sm:h-screen pt-5">
        <ul className="flex sm:flex-col gap-2">
          <div className="grid sm:flex sm:flex-col gap-2">
            <li
              className={`p-2 pl-0 sm:pl-6 ${
                position === "dashboard" ? "bg-light" : "hover:bg-light"
              }`}
            >
              <Link to="/dashboard" onClick={() => setPosition("dashboard")}>
                <img src={dashboard} alt="dashboard icon" />
                Dashboard
              </Link>
              <span className="hidden md:block lowercase text-xs text-left -mt-2 ">
                get an overview
              </span>
            </li>

            {props.userType === "admin" && (
              <li
                className={`p-2 pl-0 sm:pl-6 ${
                  position === "deliveries" ? "bg-light" : "hover:bg-light"
                }`}
              >
                <Link to="/deliveries" onClick={() => setPosition("deliveries")}>
                  <img src={deliveries} alt="deliveries icon" />
                  Deliveries
                </Link>
                <span className="hidden md:block lowercase text-xs text-left -mt-2">
                  see what's coming
                </span>
              </li>
            )}

            <li
              className={`p-2 pl-0 sm:pl-6 ${
                position === "inventory" ? "bg-light" : "hover:bg-light"
              }`}
            >
              <Link to="/inventory" onClick={() => setPosition("inventory")}>
                <img src={inventory} alt="inventory icon" />
                Inventory
              </Link>
              <span className="hidden md:block lowercase text-xs text-left -mt-2">
                see what's missing
              </span>
            </li>
            <li
              className={`p-2 pl-0 sm:pl-6 ${position === "posts" ? "bg-light" : "hover:bg-light"}`}
            >
              <Link to="/posts" onClick={() => setPosition("posts")}>
                <img src={posts} alt="posts icon" />
                Posts
              </Link>
              <span className="hidden md:block lowercase text-xs text-left -mt-2">
                see the latest news
              </span>
            </li>
          </div>
          <div>
            <li
              className={`p-2 pl-0 sm:pl-6 ${
                position === "trackers" ? "bg-light" : "hover:bg-light"
              }`}
            >
              <Link to="/trackers" onClick={() => setPosition("trackers")}>
                <img src={trackers} alt="trackers icon" />
                Trackers
              </Link>
              <span className="hidden md:block lowercase text-xs text-lef -mt-2">
                update the data
              </span>
            </li>

            <ul className="opacity-80 mt-2 ml-2 sm:ml-8">
              <li>Cleaning shoes</li>
              <li>Closing receipts</li>
              <li>Consent form</li>
              <li>Crashpad rental</li>
              <li>Food waste</li>
              <li>Lost & Found</li>
            </ul>
          </div>
        </ul>
      </nav>
      <span className="text-xs fixed bottom-0 left-2 hover:bg-light rounded-md">
        <a href="https://icons8.com/" target="_blank">
          icons source: icons8.com
        </a>
      </span>
    </div>
  );
}
