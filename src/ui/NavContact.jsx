import { Link } from "react-router-dom";

function NavContact() {
  return (
    <div className="flex lg:inline sm:hidden">

      <Link to="/contact" >
        <button className="text-[12px] bg-nrmblue hover:bg-skyblue transition-all ease-in-out px-2 py-1 rounded-lg text-white mt-3">
          Contact Us
        </button>
      </Link>
      
    </div>
  );
}

export default NavContact;
