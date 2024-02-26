import { GiBullseye } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { IoCash } from "react-icons/io5";

function Mission() {
  return (
    <section id="clients" className="px-8 mt-16 font-popins">
      <h2 className="text-[1.5rem] text-center text-[darkgrey]  sm:my-5 md:mt-0">
        Mission, Ability and Company Vision
      </h2>
      <p className="text-sm text-center text-[grey] my-10">
        We have rendered services to major importers and exporters and we are
        able to handle large volumes of cargo to unspecified quantity i.e over
        1000 tonnes of cargo at once and of value of more than Ksh 100 million.
        We are well respect by the business community, government agencies and
        maintain a good reputation with financial institutions that provide the
        much needed financial supports as and when required. We are able to
        offer logistical support and advice to our clients at any given time.
      </p>

      <div className="flex flex-col lg:flex-row  justify-around md:gap-[5rem] gap-[3rem] m-10">
        <div className="rounded-sm border border-[darkgrey] text-center basis-auto p-4">
          <GiBullseye className="mx-auto text-3xl text-[maroon] " />
          <p className="font-bold text-[16px] mb-3">Mission</p>
          <p className="text-[11px] text-[grey]">
            To instill clientele confidence by provision of efficient and
            quality services in supply and construction industry to our existing
            and prospective clients, upholding equity and sanity in the industry
            by abiding by the Laws and Regulation as stipulated in the East
            African Customs Act and to improve the living standards of people by
            providing job opportunities and participation in welfare activities.
          </p>
        </div>
        <div className="rounded-sm border border-[darkgrey] text-center basis-auto  p-4">
          <FaEye className="mx-auto text-3xl text-green" />
          <p className="font-bold text-[16px] mb-3">Vision</p>
          <p className="text-[11px] text-[grey]">
            To be the largest suppliers, Cargo clearing Agents and contractors
            in East and Central Africa with reputation in efficiency and quality
            in services delivery.
          </p>
        </div>
        <div className="rounded-sm border border-[darkgrey] text-center basis-auto  p-4">
          <IoCash className="mx-auto text-3xl text-[orange]" />
          <p className="font-bold text-[16px] mb-3">Marketing Vision</p>
          <p className="text-[11px] text-[grey]">
            Between the year 2010 and 2018 we are projected to increase our
            client base whereby we are targeting to clear at least 100 new
            containers a month and 60 units of motor vehicles and 5 shipments of
            loose/conventional cargo a month. We will also introduce another
            business line for exports as export agents. Which means we will have
            to introduce ourselves to Airlines and shipping agents
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;
