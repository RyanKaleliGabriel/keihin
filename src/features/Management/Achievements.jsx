import { FaHandshake } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

function Achievements() {
  return (
    <div className=" font-popins flex flex-col lg:flex-row  justify-evenly md:gap-[5rem] gap-[3rem] m-10">
      <div className="rounded-sm bg-white shadow-xl  text-center basis-[20rem]  p-4">
        <FaHandshake className="mx-auto text-3xl text-nrmblue " />
        <p className=" text-[18px] mt-4 mb-4">Parcticipation & Rebranding</p>
        <p className="text-[10px] text-[grey]">
          This history of participation, contribution, involvement and
          articulation of ideas and suggestions including proposals to rebrand
          Kifwa, where he served on its board for a continuous eight years,
          finally rising to the apex as its national vice chairman, is simply
          fulfilling. Most of it revolves around effectively following up issues
          affecting Kifwa members at the port of Mombasa and with related
          inter-governmental agencies, locally, regionally and internationally;
          and, his recommendations and solutions speak volumes about his
          commitment to streamline the sector.
        </p>
      </div>
      <div className="rounded-sm bg-white shadow-xl text-center basis-[20rem] p-4">
        <FaBriefcase className="mx-auto text-3xl text-nrmblue" />
        <p className="text-[16px] mt-4 mb-4">Experience</p>
        <p className="text-[11px] text-[grey]">
          In addition to a planning and management major in the University of
          Nairobi, He also holds a diploma in Clearing and Forwarding from the.
          Kenya Institute of Clearing and Forwarding. Eric started his working
          career in 1995 when he joined Interland East Africa Company Ltd as a
          management trainee. In 1998 he left that company and joined Joles
          Investment Company as its Mombasa branch manager.
        </p>
      </div>
      <div className="rounded-sm bg-white shadow-xl text-center basis-[20rem] h-auto  p-4">
        <FaArrowTrendUp className="mx-auto text-3xl text-nrmblue" />
        <p className=" text-[16px] mt-4 mb-4">Keihin and Further Success</p>
        <p className="text-[11px] text-[grey]">
          In 2005, he left Joles and proceeded to form his own company, Keihin
          Maritime Services Ltd, which he is still running as its Managing
          Director. In 2014, he also formed Blessed Union, a Company that deals
          with general supplies, building construction and real estate
          management.
        </p>
      </div>
    </div>
  );
}

export default Achievements;
