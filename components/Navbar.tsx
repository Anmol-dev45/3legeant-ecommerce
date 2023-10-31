import { NAV_ITEMS } from "@/constants";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import Search from "./Search";
import UserProfile from "./UserProfile";
const Navbar = () => {
  return (
    <header className="container-c py-5 flex-between">
      <MobileMenu />
      <div className="max-md:hidden">
        <Logo />
      </div>
      <nav className="flex gap-10 text-sm font-medium capitalize leading-6 max-md:hidden">
        {NAV_ITEMS.map((item) => (
          <NavItem item={item} key={item.name} />
        ))}
      </nav>
      <div className="flex-center gap-4">
        <div className="max-md:hidden">
          <Search />
        </div>
        <div className="max-md:hidden">
          {/* <UserProfile name="Anmol Basnet" image={null} /> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
