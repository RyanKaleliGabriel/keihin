function Clients() {
  return (
    <section id="clients" className="px-8 mt-16 font-popins">
      <div className="">
        <h2 className="text-[1.5rem] text-center text-[lightgrey] sm:my-5 md:mt-0">
          Our Trusted Clients
        </h2>
        <p className="text-sm text-center text-[grey] mt-5">
          Explore our valued clients, a tapestry of trusted partnerships and
          shared success. Each logo represents a journey we've undertaken with
          industry leaders, startups, and innovative organizations.
          <br /> We're proud to have earned their trust and look forward to
          continuing to deliver exceptional results together.
        </p>
      </div>

      <div className="mt-10">
        <div className="flex flex-wrap  justify-around">
          <img
            src="/kemsa.png"
            alt=""
            className="md:w-[6rem] md:h-[6rem] w-[6rem] h-[6rem] mt-4 "
          />
          <img
            src="/kilifi.png"
            alt=""
            className="md:w-[6rem] md:h-[6rem] w-32 h-32 mt-4 "
          />
          <img
            src="/kpa.png"
            alt=""
            className="md:w-[6rem] md:h-[6rem] w-32 h-32 mt-4 "
          />
          <img
            src="/meru.png"
            alt=""
            className="md:w-[6rem] md:h-[6rem] w-32 h-32 mt-4 "
          />
        </div>
        <div className="flex flex-wrap  justify-around mt-10">
          <img
            src="/telkom.png"
            alt=""
            className="md:w-[6rem] md:h-[6rem] w-32 h-32 mt-4"
          />
          <img
            src="/kwale.png"
            alt=""
            className="md:w-[6rem] md:h-[6rem] w-32 h-32 mt-4"
          />
          <img
            src="/qualitymeat.png"
            alt=""
            className="md:w-[6rem] md:h-[6rem] w-32 h-32 mt-4"
          />
          <img
            src="/bluewave.png"
            alt=""
            className="md:w-[6rem] md:h-[6rem] w-32 h-32 mt-4"
          />
        </div>
      </div>
    </section>
  );
}

export default Clients;
