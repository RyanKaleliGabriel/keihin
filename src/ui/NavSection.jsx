
import Navtag from "./Navtag";

function NavSection() {
  return (
    <ul className="lg:flex sm:hidden  gap-12 text-[12px] mt-4">
      <li>
        <Navtag tag="#Home" >
          Home
        </Navtag>
      </li>
      <li>
        <Navtag tag="#WWD" >
          What We Do
        </Navtag>
      </li>
      <li>
        <Navtag tag="#SERVICES" >
          Services
        </Navtag>
      </li>
      <li>
        <Navtag tag="#C&F" >
          Clearing and Forwarding
        </Navtag>
      </li>

    </ul>
  );
}


export default NavSection;
