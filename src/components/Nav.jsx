import Logo from "./Logo";
import Search from "./Search";
import Profile from "./Profile";
export default function Nav() {
  return (
    <nav className="flex items-center justify-between bg-dark p-2 px-6">
      <Logo />
      <Search />
      <Profile />
    </nav>
  );
}
