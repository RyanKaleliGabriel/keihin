import { NavLink } from "react-router-dom";


function NavSection() {
  return (
    <ul className="lg:flex sm:hidden  gap-12 text-[12px] mt-4">
      <li>
        <NavLink to="/services" className="text-nrmblue px-3 py-1 rounded hover:bg-navblue transition-all ease-in-out">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/experience" className="text-nrmblue px-3 py-1 rounded hover:bg-navblue transition-all ease-in-out">
          Experience & Clients
        </NavLink>
      </li>
      <li>
        <NavLink to="/management" className="text-nrmblue px-3 py-1 rounded hover:bg-navblue transition-all ease-in-out">
          Management
        </NavLink>
      </li>
    </ul>
  );
}

export default NavSection;
