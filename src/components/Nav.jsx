import Logo from "./Logo";
import Search from "./Search";
import Profile from "./Profile";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <ul className="flex items-center justify-between bg-dark p-2 px-6">
        <Logo />
        <Search />
        <Profile />
      </ul>
      <nav className="bg-">
        <ul>
          <Link to="/">Dashboard</Link>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/deliveries">Deliveries</Link>
          </li>
          <li>
            <Link to="/stock">Stock</Link>
          </li>
          <li>
            <Link to="/trackers">Trackers</Link>
          </li>
          <li>
            <Link to="/manual">Manual</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
