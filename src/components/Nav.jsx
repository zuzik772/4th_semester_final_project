import Logo from "./Logo";
import Search from "./Search";
import Profile from "./Profile";

export default function Nav() {
  return (
    <ul className="flex items-center justify-between bg-dark p-1 px-4">
      <Logo />
      <Search />
      <Profile />
    </ul>
  );
}
