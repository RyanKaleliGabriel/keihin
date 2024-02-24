import Navtag from "./Navtag";
import { useEffect, useState } from "react";

function NavSection() {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.clientHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <ul className="lg:flex sm:hidden  gap-12 text-[12px] mt-4">
      <li>
        <Navtag tag="#Home" isActive={activeSection === "home"}>
          Home
        </Navtag>
      </li>
      <li>
        <Navtag tag="#WWD" isActive={activeSection === "WWD"}>
          What We Do
        </Navtag>
      </li>
      <li>
        <Navtag tag="#SERVICES" isActive={activeSection === "SERVICES"}>
          Services
        </Navtag>
      </li>
      <li>
        <Navtag tag="#C&F" isActive={activeSection === "C&F"}>
          Clearing and Forwarding
        </Navtag>
      </li>
      <li>
        <Navtag
          tag="#C&F"
          isActive={activeSection === "clients"}
          visible="false"
        >
          Clients
        </Navtag>
      </li>
      <li>
        <Navtag
          tag="#C&F"
          isActive={activeSection === "Experiance"}
          visible="false"
        >
          Experience
        </Navtag>
      </li>
      <li>
        <Navtag
          tag="#C&F"
          isActive={activeSection === "Mission"}
          visible="false"
        >
          Mission
        </Navtag>
      </li>
    </ul>
  );
}

export default NavSection;

