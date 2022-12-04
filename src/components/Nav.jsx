import Logo from "./Logo";
import Search from "./Search";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import dashboard from "../img/dashboard.svg";
import deliveries from "../img/deliveries.svg";
import trackers from "../img/trackers.svg";
import posts from "../img/posts.svg";
import manual from "../img/manual.svg";
import stock from "../img/stock.svg";
import { useState } from "react";

export default function Nav() {
  return (
    <div>
      <ul className="flex items-center justify-between bg-dark p-1 px-4">
        <Logo />
        <Search />
        <Profile />
      </ul>
      <nav className="p-8">
        <ul className="flex flex-col gap-8">
          <li>
            <Link to="/">
              <img src={dashboard} alt="dashboard icon" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/posts">
              <img src={posts} alt="posts icon" />
              Posts
            </Link>
          </li>
          <li>
            <Link to="/deliveries">
              <img src={deliveries} alt="deliveries icon" />
              Deliveries
            </Link>
          </li>
          <li>
            <Link to="/stock">
              <img src={stock} alt="stock icon" />
              Stock
            </Link>
          </li>
          <li>
            <Link to="/trackers">
              <img src={trackers} alt="trackers icon" />
              Trackers
            </Link>
          </li>
          <li>
            <Link to="/manual">
              <img src={manual} alt="manual icon" />
              Manual
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
