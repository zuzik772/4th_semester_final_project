import Logo from "./Logo";
import Search from "./Search";
import Profile from "./Profile";
import Dropdown from "./Dropdown";

export default function Nav() {
  return (
    <div className="flex gap-2 flex-col md:flex-row items-start md:items-center bg-dark p-1 px-4">
      <Logo />
      <Search />
      <Dropdown />
      <Profile />
    </div>
  );
}
