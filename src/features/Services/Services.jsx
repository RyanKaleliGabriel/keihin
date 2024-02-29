import { MdOutlineFlight } from "react-icons/md";
import { FaForward } from "react-icons/fa";
import { FaShip } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi";

function Services() {
  return (
    <section id="SERVICES" className="px-8 mt-28 font-popins" >
      <h2 className="text-[1.5rem] text-center text-nrmblue">
        Keihin Services
      </h2>
      <div className="mt-12 md:flex gap-2 text-justify">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-5 ">
            <HiShoppingCart className="text-3xl text-[skyblue]" />
            <div className="mt-4 basis-9/12">
              <p className="font-bold text-[16px]  mb-3">Genaral Supplies</p>
              <p className="text-[grey] text-[12px]">
                We supply all kind of products tour our existing and potential
                customers on demand{" "}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <MdOutlineFlight className="text-3xl text-[skyblue] " />
            <div className="mt-4 basis-9/12">
              <p className="font-bold text-[16px] mb-3">Air Freight</p>
              <p className="text-[grey] text-[12px]">
                We facilitate the clearing and forwarding of all types of air
                freight from the port of Mombasa, including loose cargo, bulk
                cargo and project cargo.{" "}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <FaForward className="text-3xl text-[skyblue]" />
            <div className="mt-4 basis-9/12">
              <p className="font-bold text-[16px] mb-3">
                Clearing and forwarding
              </p>
              <p className="text-[grey] text-[12px]">
                We facilitate the clearing and forwarding of all types of
                consignment from the port of Mombasa, ICDN and border points of
                Kenya including Namanga, Lunga Lunga, Kiunga etc
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <FaShip className="text-3xl text-[skyblue]" />
            <div className="mt-4 basis-9/12">
              <p className="font-bold text-[16px] mb-3">Ship Handling</p>
              <p className="text-[grey] text-[12px]">
                We deal with general supplies and merchandise for ships and
                equipment at the port of Mombasa.
              </p>
            </div>
          </div>
        </div>
        <img
          src="/exp2.jpg"
          alt="Services Section Image"
          className="sm:hidden md:inline ml-12  h-[25%] w-[25%]"
        />
      </div>
    </section>
  );
}

export default Services;
