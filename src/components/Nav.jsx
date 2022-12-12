import Logo from "./Logo";
import Search from "./Search";
import Profile from "./Profile";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
export default function Nav(props) {
  return (
    <div className="flex gap-2 md:gap-10 flex-col md:flex-row items-start md:items-center bg-dark p-1 px-4 rounded-none h-fit">
      <Link to="/dashboard">
        <Logo />
      </Link>
      <Search />
      <Dropdown />
      <Profile getLoginStatus={props.getLoginStatus}/>
    </div>
  );
}
