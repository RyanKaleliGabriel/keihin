import { MdAccessTimeFilled } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaUsers } from "react-icons/fa";

function ExperienceStat() {
  return (
    <div className="text-center flex md:justify-around md:flex-row sm:flex-col mt-8  ">
      <div className="flex flex-col items-center sm:mb-5 mb-0">
        <MdAccessTimeFilled className="text-[3rem] bg-orange text-white rounded-full p-2 mb-4" />
        <p className="font-bold text-maroon">20+</p>
        <p className="text-[grey] text-sm">Active Years of Experience</p>
      </div>

      <div className="flex flex-col items-center sm:mb-5 mb-0">
        <IoMdCheckmarkCircleOutline className="text-[3rem] bg-[lightgreen] text-white rounded-full p-2 mb-4" />
        <p className="font-bold text-maroon">1000+</p>
        <p className="text-[grey] text-sm">Tonnes of Cargo Handled</p>
      </div>

      <div className="flex flex-col items-center sm:mb-5 mb-0">
        <FaUsers className="text-[3rem] bg-purple text-white rounded-full p-2 mb-4" />
        <p className="font-bold text-maroon">250+</p>
        <p className="text-[grey] text-sm ">Satisfied and Loyal Clients</p>
      </div>
    </div>
  );
}

export default ExperienceStat;
