import { NAV_ITEMS } from "@/constants";
import NavItem from "./NavItem";
const Navbar = () => {
  return (
    <header className="container-c py-5 flex-between">
      <h1 className="text-2xl font-medium text-neutral-7 leading-6">
        3legant<span className="text-neutral-4">.</span>
      </h1>
      <nav className="flex md:flex-row gap-10 text-sm font-medium capitalize leading-6">
        {NAV_ITEMS.map((item) => (
          <NavItem item={item} key={item.name} />
        ))}
      </nav>
      <div className="w-64 h-10 border-black border-2"></div>
    </header>
  );
};

export default Navbar;
