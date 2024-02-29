import { RiRecycleFill } from "react-icons/ri";
import { FaCarAlt, FaShippingFast } from "react-icons/fa";
import { GiIronHulledWarship } from "react-icons/gi";

function ServicesTwo() {
  return (
    <section
      className="px-8 mt-16 font-popins  bg-lightblue py-12"
      id="SERVICESTWO"
    >
      <h2 className="mb-12 text-[1.5rem] text-nrmblue text-center">
        Keihin Services
      </h2>
      <div className="md:flex gap-12 text-justify bg-lightblue ">
        <img
          src="/clients.jpg"
          alt="Services Section Image"
          className="sm:hidden md:inline ml-12  h-[25%] w-[25%]"
        />
        <div className="flex flex-col gap-8 md:ml-20">
          <div className="flex items-center gap-5 ">
            <FaShippingFast className="text-3xl text-[skyblue]" />
            <div className="mt-4 basis-9/12">
              <p className="font-bold text-[16px] mb-3">Road Transport</p>
              <p className="text-[grey] text-[12px]">
                We facilitate transportation of containerized cargo, loose cargo
                and out-of-gauge cargo across Kenya.{" "}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <GiIronHulledWarship className="text-3xl text-[skyblue] " />
            <div className="mt-4 basis-9/12">
              <p className="font-bold text-[16px] mb-3">Sea Freight</p>
              <p className="text-[grey] text-[12px]">
                We facilitate clearing & forwarding of all types of sea freight,
                including containerized cargo, bulk cargo such as wheat, Sugar,
                rice, cooking oil and fuel.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <FaCarAlt className="text-3xl text-[skyblue]" />
            <div className="mt-4 basis-9/12">
              <p className="font-bold text-[16px] mb-3">Automobiles</p>
              <p className="text-[grey] text-[12px]">
                We facilitate clearing and forwarding of all types of
                automobiles from the port of Mombasa and CFS’s within Mombasa
                and border points of exit.{" "}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <RiRecycleFill className="text-3xl text-[skyblue]" />
            <div className="mt-4 basis-9/12">
              <p className="font-bold text-[16px] mb-3">Waste Management</p>
              <p className="text-[grey] text-[12px]">
                We deal with collection, transportation, and disposal of
                garbage, sewage, and other waste products from ships at the port
                of Mombasa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesTwo;
