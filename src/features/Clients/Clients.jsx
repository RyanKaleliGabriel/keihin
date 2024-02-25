import Bluespan from "../../ui/Bluespan";
import { FaCheckCircle } from "react-icons/fa";

function Clients() {
  return (
    <section id="clients" className="px-8 mt-16 font-popins">
      <div className="">
        <h2 className="text-[1.5rem] text-center text-[lightgrey] sm:my-5 md:mt-0">
          Our Trusted Clients
        </h2>
        <p className="text-sm text-center text-[grey] mt-5">
          Explore our valued clients, a tapestry of trusted partnerships and
          shared success. Each logo represents a journey we've undertaken with
          industry leaders, startups, and innovative organizations.
          <br /> We're proud to have earned their trust and look forward to
          continuing to deliver exceptional results together.
        </p>
      </div>

      <div className="mt-10">
        <div className="flex flex-wrap  justify-around">
          <img
            src="/kemsa.png"
            alt=""
            className="md:w-[6rem] md:h-[6rem] w-[6rem] h-[6rem] mt-4 "
          />
          <img
            src="/kilifi.png"
            alt=""
            className="md:w-[6rem] md:h-[6rem] w-32 h-32 mt-4 "
          />
          <img
            src="/kpa.png"
            alt=""
            className="md:w-[6rem] md:h-[6rem] w-32 h-32 mt-4 "
          />
          <img
            src="/meru.png"
            alt=""
            className="md:w-[6rem] md:h-[6rem] w-32 h-32 mt-4 "
          />
        </div>
        <div className="flex flex-wrap  justify-around mt-10">
          <img
            src="/telkom.png"
            alt=""
            className="md:w-[6rem] md:h-[6rem] w-32 h-32 mt-4"
          />
          <img
            src="/kwale.png"
            alt=""
            className="md:w-[6rem] md:h-[6rem] w-32 h-32 mt-4"
          />
          <img
            src="/qualitymeat.png"
            alt=""
            className="md:w-[6rem] md:h-[6rem] w-32 h-32 mt-4"
          />
          <img
            src="/bluewave.png"
            alt=""
            className="md:w-[6rem] md:h-[6rem] w-32 h-32 mt-4"
          />
        </div>
      </div>

      <div className="mt-12 px-8 bg-lightblue py-20">
        <h2 className="text-[1.5rem] text-[lightgrey] sm:my-5 md:mt-0">
          Other Clients
        </h2>
        <p className="text-sm text-justify text-[grey] mt-5">
          Explore our extensive network of esteemed clients, ranging from
          industry giants to dynamic startups. While logos may not capture them
          all, the essence of these partnerships resonates in every
          collaboration. Join the ranks of businesses that have chosen{" "}
          <Bluespan>Keihin Maritime</Bluespan> as their strategic partner,
          contributing to our diverse community of success stories.
        </p>
        <div className="flex md:flex-row flex-col justify-around text-[darkgrey] text-sm mt-5">
          <ul>
            <div className=" flex items-center mb-3 gap-2">
              <FaCheckCircle className="text-green" />
              <li>Shikara Apartments</li>
            </div>
            <div className=" flex items-center mb-3 gap-2">
              <FaCheckCircle className="text-green" />
              <li>A.K Computers</li>
            </div>
            <div className=" flex items-center mb-3 gap-2">
              <FaCheckCircle className="text-green" />
              <li>Abdulgani Ibrahim Co. Ltd</li>
            </div>
            <div className=" flex items-center mb-3 gap-2">
              <FaCheckCircle className="text-green" />
              <li>Fanaa Co. Ltd</li>
            </div>
          </ul>

          <ul>
            <div className=" flex  items-center gap-2 mb-3 ">
              <FaCheckCircle className="text-green" />
              <li>Jiwa Impex Ltd,</li>
            </div>
            <div className=" flex items-center gap-2 mb-3">
              <FaCheckCircle className="text-green" />
              <li>Bolpak Motors</li>
            </div>
            <div className=" flex items-center gap-2 mb-3">
              <FaCheckCircle className="text-green" />
              <li>Kingstone Trading Company</li>
            </div>
            <div className=" flex items-center gap-2 mb-3">
              <FaCheckCircle className="text-green" />
              <li>Moffat Court Hotels,</li>
            </div>
          </ul>

          <ul>
            <div className=" flex items-center gap-2 mb-3">
              <FaCheckCircle className="text-green" />
              <li>Silver Spread Co. Ltd,</li>
            </div>
            <div className=" flex items-center gap-2 mb-3">
              <FaCheckCircle className="text-green" />
              <li>Anirita Poultry Farm</li>
            </div>
            <div className=" flex items-center gap-2 mb-3">
              <FaCheckCircle className="text-green" />
              <li>Knauf Trading Co. Ltd</li>
            </div>
            <div className=" flex items-center gap-2 mb-3">
              <FaCheckCircle className="text-green" />
              <li>R.B International Co. Ltd</li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Clients;
