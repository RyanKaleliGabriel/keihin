import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState("");

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
    setStyle("animate__animated animate__rotateIn");
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-2xl flex justify-between px-12 py-6 font-popins">
      <Link to="/" className="md:w-[12%] md:h-[12%] w-[25%] ">
        <img src="/logo.png" alt="Keihin Logo"  />
      </Link>

      <nav>
        <ul className="lg:flex sm:hidden gap-4 text-[12px]">
          <li className="text-[skyblue]">HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>CONTACT</li>
        </ul>

        <button onClick={handleClick} className={isOpen && style}>
          {isOpen ? (
            <HiX className="text-[1.5rem] lg:hidden" />
          ) : (
            <HiMenu className="text-[1.5rem] lg:hidden" />
          )}
        </button>
        {isOpen ? (
          <nav className="text-sm animate__animated animate__bounceIn bg-lightblue lg:hidden sm:flex flex-col gap-4 p-4 absolute right-12 shadow-xl">
            <Link
              to="/"
              className=" text-center hover:bg-lightgrey px-5 py-3 rounded-lg"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="hover:bg-lightgrey px-5 py-3 rounded-lg"
            >
              Contact
            </Link>
          </nav>
        ) : null}
      </nav>
    </header>
  );
}

export default Header;
