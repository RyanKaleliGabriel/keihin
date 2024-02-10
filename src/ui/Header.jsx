import { HiMenu } from "react-icons/hi";
function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-2xl flex justify-between px-12 py-6 font-popins">
      <h2 className="font-bold text-[16px] ">KEIHIN MARITIME SERVICES</h2>
      <nav>
        <ul className="lg:flex sm:hidden gap-4 text-[12px]">
          <li className="text-[skyblue]">HOME</li>
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>CONTACT</li>
        </ul>
        <HiMenu className="text-[1.5rem] lg:hidden" />
      </nav>
    </header>
  );
}

export default Header;
