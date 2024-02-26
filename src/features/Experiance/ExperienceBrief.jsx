import Bluespan from "../../ui/Bluespan";


function ExperienceBrief() {
  return (
    <div className="px-8 lg:flex mt-12  justify-center">
      <img
        src="/exp1.jpeg"
        alt="ExperianceSection Image"
        className="md:h-[22rem] md:w-[22rem] mx-auto w-[18rem] h-[18rem] lg:mr-24 sm:mb-5 lg:rounded-md sm:rounded-full md:mt-0"
      />
      <div className="basis-[30%]">
        <p className="text-[13px] text-justify text-[grey]">
          <Bluespan>KEIHIN MARITIME SERVICES LTD</Bluespan> posses perhaps some
          of the most qualified, knowledgeable and well-trained staff in cargo
          logistics and in the Building Construction and Supply sector. It is
          our policy to refresh and update our staff on the current industry
          trends and business environment. In evaluation of our years of
          experience, total staff experience and the volume and value of work
          handled is outstanding and is equal to none in the medium class
          enterprises.
        </p>
        <p className="text-[13px] text-justify mt-5 text-[grey]">
          Our staff comprises of 2 (two) managerial personnel who are in charge
          of operations with experience ranging from 10 years. In addition, 2
          (two) technical staff who are in charge of documentation have not less
          than 7 years experience. 2 (two) of our cargo handling technicians
          have over 5 years experience between them. They are supported by 1
          (one) accounts clerk, 4 (four) support staff and 2 (two) marketing
          executives.
        </p>
      </div>
      <img
        src="/exp3.jpg"
        alt="ExperianceSection Image"
        className="md:h-[22rem] md:w-[22rem] w-[16rem] h-[16rem] mx-auto  lg:ml-24 sm:mt-5 lg:rounded-md sm:rounded-full "
      />
    </div>
  );
}

export default ExperienceBrief;
