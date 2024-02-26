import AppLayout from "../ui/AppLayout";
import Bluespan from "../ui/Bluespan";
import { FaHandshake } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

function Management() {
  return (
    <AppLayout>
      <div className="pb-4 bg-backmng ">
        <section
          id="About"
          className=" px-8 mt-16 md:flex justify-around gap-12 font-popins sm:flex-row"
        >
          <div className="flex mt-10 flex-col gap-6 text-justify basis-[36rem] text-[grey] ">
            <h2 className="text-[1.5rem] text-[grey] ">Management</h2>
            <p className="text-[13px]">
              Eric Gitonga Stanley and Elizabeth Mbinya Mundali are the founding
              directors of Keihin Maritime Services Limited and are by law
              responsible for the exercise of the company's functions. As the
              Chief Executive Officer, Mr Gitonga has overseen the steadfast
              growth of the company over the years, both in volume and
              sophistication. Under his stewardship, the company continues to
              enjoy sound and phenomenal financial growth enabling it to
              increase its asset base.
            </p>
            <p className="text-[13px]">
              Among his career objectives is to contribute to the growth of the
              organization and bring results using his management skills and
              knowledge while promoting professional and moral ethics.A planning
              and management graduate major from the
              <Bluespan>
                <a href="https://www.uonbi.ac.ke/"> University of Nairobi</a>
              </Bluespan>
              , Gitonga has along and cherished history of involvement with the
              clearing and forwarding industry.
            </p>
          </div>
          <img
            src="/owner.jpeg"
            alt="About Section Image"
            className="mt-8 md:h-96  sm:mb-8 "
          />
        </section>

        <div className=" font-popins flex flex-col lg:flex-row  justify-center md:gap-[5rem] gap-[3rem] m-10">
          <div className="rounded-sm bg-white shadow-xl  text-center basis-[20rem]  p-4">
            <FaHandshake className="mx-auto text-3xl text-nrmblue " />
            <p className=" text-[18px] mt-4 mb-4">
              Parcticipation & Rebranding
            </p>
            <p className="text-[10px] text-[grey]">
              This history of participation, contribution, involvement and
              articulation of ideas and suggestions including proposals to
              rebrand Kifwa, where he served on its board for a continuous eight
              years, finally rising to the apex as its national vice chairman,
              is simply fulfilling. Most of it revolves around effectively
              following up issues affecting Kifwa members at the port of Mombasa
              and with related inter-governmental agencies, locally, regionally
              and internationally; and, his recommendations and solutions speak
              volumes about his commitment to streamline the sector.
            </p>
          </div>
          <div className="rounded-sm bg-white shadow-xl text-center basis-[20rem] p-4">
            <FaBriefcase className="mx-auto text-3xl text-nrmblue" />
            <p className="text-[16px] mt-4 mb-4">Experience</p>
            <p className="text-[11px] text-[grey]">
              In addition to a planning and management major in the University
              of Nairobi, He also holds a diploma in Clearing and Forwarding
              from the. Kenya Institute of Clearing and Forwarding. Eric started
              his working career in 1995 when he joined Interland East Africa
              Company Ltd as a management trainee. In 1998 he left that company
              and joined Joles Investment Company as its Mombasa branch manager.
            </p>
          </div>
          <div className="rounded-sm bg-white shadow-xl text-center basis-[20rem] h-auto  p-4">
            <FaArrowTrendUp className="mx-auto text-3xl text-nrmblue" />
            <p className=" text-[16px] mt-4 mb-4">Keihin and Further Success</p>
            <p className="text-[11px] text-[grey]">
              In 2005, he left Joles and proceeded to form his own company,
              Keihin Maritime Services Ltd, which he is still running as its
              Managing Director. In 2014, he also formed Blessed Union, a
              Company that deals with general supplies, building construction
              and real estate management.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Management;
