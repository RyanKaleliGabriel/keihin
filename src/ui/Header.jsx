import { useLocationPath } from "../context/LocationContext";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import NavContact from "./NavContact";
import NavSection from "./NavSection";

function Header() {
  const { pathName } = useLocationPath();

  return (
    <header className=" z-[1000] fixed top-0 w-full bg-white shadow-2xl flex justify-between px-12 py-1 font-popins">
      <Logo />
      <nav className="nav">
        {pathName === "/" && <NavSection />}
        <NavMenu />
      </nav>
      <NavContact />
    </header>
  );
}

export default Header;
