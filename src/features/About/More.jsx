import { Link } from "react-router-dom";
import Bluespan from "../../ui/Bluespan";
import { FaCheckCircle } from "react-icons/fa";

function More() {
  return (
    <section
      id="About"
      className=" px-8 mt-16 md:flex justify-evenly gap-12 font-popins sm:flex-row"
    >
      <div className="flex mt-10 flex-col gap-6 text-justify basis-[36rem] text-[grey] ">
        <h2 className="text-[1.5rem] text-nrmblue ">Overview of Our Company</h2>
        <p className="text-[13px]">
          Our company was inaugurated in 2005. It has its headquarters at the
          sea port of Mombasa on the Third Floor of Al-Amin Plaza, opposite
          Sheetal Plaza, along Sauti ya Kenya road, off Moi Avenue. Its close
          proximity to Mombasa port makes it easier to deliver our services.
        </p>
        <p className="text-[13px]">
          We always endeavour that our customers enjoy excellent and unrivalled
          satisfactory services. Besides this, we go an extra mile to provide
          after- sales services as a value-addition to completion within the
          <Bluespan> logistics chain.</Bluespan>
        </p>
        <ul className="text-[14px]">
          <div className=" flex items-center mb-3 gap-2">
            <FaCheckCircle className="text-green" />
            <li>Handles business worth over Ksh. 200 million.</li>
          </div>
          <div className=" flex items-center mb-3 gap-2">
            <FaCheckCircle className="text-green" />
            <li>Dynamic organization in scope and operations</li>
          </div>
          <div className=" flex items-center mb-3 gap-2">
            <FaCheckCircle className="text-green" />
            <li>Great potential for growth, expansion and diversification</li>
          </div>
          <div className=" flex items-center mb-3 gap-2">
            <FaCheckCircle className="text-green" />
            <li>Possesses a strong, competent and professional management</li>
          </div>
        </ul>
        <Link to="/services" className="mx-2">
          <button className="text-[14px] bg-skyblue hover:bg-nrmblue transition-all ease-in-out px-5 py-3 rounded-lg  text-white mt-3">
            More About Us
          </button>
        </Link>
      </div>
      <img
        src="/moreabout.png"
        alt="About Section Image"
        className="mt-8 md:h-96  sm:mb-8 "
      />
    </section>
  );
}

export default More;
