import { Link } from "react-router-dom";

function NavContact() {
  return (
    <Link to="/contact" className="lg:inline sm:hidden">
      <button className="text-[12px] bg-nrmblue hover:bg-skyblue transition-all ease-in-out px-2 py-1 rounded-lg text-white mt-3">
        Contact Us
      </button>
    </Link>
  );
}

export default NavContact;
