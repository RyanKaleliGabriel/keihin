import { MdAccessTimeFilled } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import Bluespan from "../../ui/Bluespan";

function Experiance() {
  return (
    <section id="Experiance" className="mt-16 font-popins mb-8 bg-lightblue py-20">
      <h2 className="text-[1.5rem] text-[lightgrey] text-center">
        Experiance and WorkForce
      </h2>

      <div className="text-center flex md:justify-around md:flex-row sm:flex-col mt-8  ">
        <div className="flex flex-col items-center sm:mb-5 mb-0">
          <MdAccessTimeFilled className="text-[3rem] bg-orange text-white rounded-full p-2 mb-4" />
          <p className="font-bold text-maroon">20+</p>
          <p className="text-[darkgrey] text-sm">Active Years of Experiance</p>
        </div>

        <div className="flex flex-col items-center sm:mb-5 mb-0">
          <IoMdCheckmarkCircleOutline className="text-[3rem] bg-[lightgreen] text-white rounded-full p-2 mb-4" />
          <p className="font-bold text-maroon">1000+</p>
          <p className="text-[darkgrey] text-sm">Tonnes of Cargo Handled</p>
        </div>

        <div className="flex flex-col items-center sm:mb-5 mb-0">
          <FaUsers className="text-[3rem] bg-purple text-white rounded-full p-2 mb-4" />
          <p className="font-bold text-maroon">250+</p>
          <p className="text-[darkgrey] text-sm ">
            Satisfied and Loyal Clients
          </p>
        </div>
      </div>

      <div className="px-8 md:flex mt-12 justify-center">
        <img
          src="/exp1.jpeg"
          alt="ExperianceSection Image"
          className="md:h-[22rem] md:w-[22rem] mx-auto w-[18rem] h-[18rem] lg:mr-24 sm:mb-5 md:rounded-md sm:rounded-full md:mt-0"
        />
        <div className="basis-[30%]">
          <p className="text-[13px] text-justify text-[darkgrey]">
            <Bluespan>KEIHIN MARITIME SERVICES LTD</Bluespan> posses perhaps
            some of the most qualified, knowledgeable and well-trained staff in
            cargo logistics and in the Building Construction and Supply sector.
            It is our policy to refresh and update our staff on the current
            industry trends and business environment. In evaluation of our years
            of experience, total staff experience and the volume and value of
            work handled is outstanding and is equal to none in the medium class
            enterprises.
          </p>
          <p className="text-[13px] text-justify mt-5 text-[darkgrey]">
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
          src="/exp3.jpg"
          alt="ExperianceSection Image"
          className="md:h-[22rem] md:w-[22rem] w-[16rem] h-[16rem] mx-auto  lg:ml-24 sm:mt-5 md:rounded-md sm:rounded-full md:mt-0"
        />
      </div>
    </section>
  );
}

export default Experiance;
