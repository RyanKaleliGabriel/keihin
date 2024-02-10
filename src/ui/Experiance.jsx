import Bluespan from "./Bluespan";
import { HiChevronUp } from "react-icons/hi2";

function Experiance() {
  return (
    <section id="Experiance" className="px-8 mt-16 font-popins mb-8">
      <h2 className="text-[1.5rem] text-[lightgrey] text-center">
        Experiance and WorkForce
      </h2>

      <div className="md:flex gap-24 mt-12">
        <div>
          <p className="text-[13px] text-justify">
            <Bluespan>KEIHIN MARITIME SERVICES LTD</Bluespan> posses perhaps
            some of the most qualified, knowledgeable and well-trained staff in
            cargo logistics and in the Building Construction and Supply sector.
            It is our policy to refresh and update our staff on the current
            industry trends and business environment. In evaluation of our years
            of experience, total staff experience and the volume and value of
            work handled is outstanding and is equal to none in the medium class
            enterprises.
          </p>
          <p className="text-[13px] text-justify mt-5">
            Our staff comprises of 2 (two) managerial personnel who are in
            charge of operations with experience ranging from 10 years. In
            addition, 2 (two) technical staff who are in charge of documentation
            have not less than 7 years experience. 2 (two) of our cargo handling
            technicians have over 5 years experience between them. They are
            supported by 1 (one) accounts clerk, 4 (four) support staff and 2
            (two) marketing executives.
          </p>
        </div>
        <img
          src="/exp1.jpeg"
          alt="ExperianceSection Image"
          className="h-96 w-100 lg:mr-24 sm:mt-5 md:mt-0"
        />
      </div>

      <div className="md:flex gap-24 mt-8">
        <img src="/exp2.jpg" className="h-96 w-96" />
        <div className="text-[13px] text-justify lg:mr-24 sm:mt-5 md:mt-0">
          <div className="mb-8">
            <div className="text-[13px] flex items-center">
              <HiChevronUp className="text-[16px] mr-2" />
              <span className="font-bold text-[maroon] text-[16px]">
                Our Vision
              </span>
            </div>
            <div className="ml-6">
              <span className="text-[12px]">
                To be the largest suppliers, Cargo clearing Agents and
                contractors in East and Central Africa with reputation in
                efficiency and quality in services delivery.
              </span>
            </div>
            <div className="border-b border-[lightgrey] mt-5 "></div>
          </div>

          <div className="mb-8">
            <div className="flex items-center">
              <HiChevronUp className="text-[16px] mr-2" />
              <span className="font-bold text-[maroon] text-[16px]">
                Our Mission
              </span>
            </div>
            <div className="ml-6">
              <span className="text-[12px]">
                To instill clientele confidence by provision of efficient and
                quality services in supply and construction industry to our
                existing and prospective clients, upholding equity and sanity in
                the industry by abiding by the Laws and Regulation as stipulated
                in the East African Customs Act and to improve the living
                standards of people by providing job opportunities and
                participation in welfare activities.
              </span>
            </div>
            <div className="border-b border-[lightgrey] mt-5 "></div>
          </div>

          <div className="mb-8">
            <div className="text-[13px] flex items-center">
              <HiChevronUp className="text-[16px] mr-2" />
              <span className="font-bold text-[maroon] text-[16px]">
                Our Ability
              </span>
            </div>
            <div className="ml-6">
              <span className="text-[12px]">
                We have rendered services to major importers and exporters and
                we are able to handle large volumes of cargo to unspecified
                quantity i.e over 1000 tonnes of cargo at once and of value of
                more than Ksh 100 million. We are well respect by the business
                community, government agencies and maintain a good reputation
                with financial institutions that provide the much needed
                financial supports as and when required. We are able to offer
                logistical support and advice to our clients at any given time.
              </span>
            </div>
            <div className="border-b border-[lightgrey] mt-5 "></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiance;
