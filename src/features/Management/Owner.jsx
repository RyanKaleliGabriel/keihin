import Bluespan from "../../ui/Bluespan";

function Owner() {
  return (
    <section
      id="About"
      className=" px-8 mt-16 md:flex justify-around gap-12 font-popins sm:flex-row"
    >
      <div className="flex mt-10 flex-col gap-6 text-justify basis-[36rem] text-[grey] ">
        <h2 className="text-[1.5rem] text-nrmblue">Management</h2>
        <p className="text-[13px]">
          Eric Gitonga Stanley and Elizabeth Mbinya Mundali are the founding
          directors of Keihin Maritime Services Limited and are by law
          responsible for the exercise of the company's functions. As the Chief
          Executive Officer, Mr Gitonga has overseen the steadfast growth of the
          company over the years, both in volume and sophistication. Under his
          stewardship, the company continues to enjoy sound and phenomenal
          financial growth enabling it to increase its asset base.
        </p>
        <p className="text-[13px]">
          Among his career objectives is to contribute to the growth of the
          organization and bring results using his management skills and
          knowledge while promoting professional and moral ethics.A planning and
          management graduate major from the
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
  );
}

export default Owner;
