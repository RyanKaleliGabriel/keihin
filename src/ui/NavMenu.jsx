import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";




function NavMenu() {
  const [style, setStyle] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
    setStyle("animate__animated animate__rotateIn");
  };

  return (
    <>
      <button onClick={handleClick} className={isOpen && style}>
        {isOpen ? (
          <HiX className="text-[1.5rem] lg:hidden mt-2" />
        ) : (
          <HiMenu className="text-[1.5rem] lg:hidden mt-2" />
        )}
      </button>
      {isOpen ? (
        <nav className="nav text-sm animate__animated animate__bounceIn bg-lightblue lg:hidden sm:flex flex-col gap-4 p-4 absolute right-12 shadow-xl ">
          <Link
            to="/"
            className=" text-center text-nrmblue hover:bg-navblue transition-all ease-in-out  px-5 py-1 rounded-lg"
          >
            Home
          </Link>
          <Link
            to="/contact"
            className=" text-center text-nrmblue hover:bg-navblue transition-all ease-in-out  px-5 py-1 rounded-lg"
          >
            Contact
          </Link>
        </nav>
      ) : null}
    </>
  );
}

export default NavMenu;
