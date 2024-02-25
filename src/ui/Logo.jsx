import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="md:w-[7%] md:h-[7%] w-[25%] ">
      <img src="/logo-new.png" alt="Keihin Logo" />
    </Link>
  );
}

export default Logo;
