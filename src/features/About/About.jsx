
function About() {
  return (
    <section
      id="About"
      className=" px-8 mt-16 md:flex justify-evenly gap-12 font-popins sm:flex-row"
    >
      <img
        src="/about.jpg"
        alt="About Section Image"
        className="md:h-96 md:w-96 sm:mb-8 "
      />
      <div className="flex mt-7  flex-col gap-3 text-justify basis-[36rem] text-[grey] ">
        <h2 className="text-[1.5rem] text-nrmblue ">About Company</h2>
        <p className="text-[13px] my-4">
          KEIHIN MARITIME SERVICES CO. LTD is a registered
          company and incorporated in the Republic of Kenya. Its main objective
          is to supply General Hardware, Building blocks, Timber, Repairs, Sand,
          Hardcore, Food staff and provision of clearing and forwarding
          services.
        </p>
        <p className="text-[13px]">
          It also undertakes building and construction and management agency
          under management of its sister company Blessed Union Co. Ltd. Other
          associated companies include Kickdown Co. Ltd, Erikah maritime
          Servcies, Limugi Co. Ltd and Bahari Storage facility in Meru. Deals
          with the management of cargo as it enters or exits a country.It
          consists of a sequence of critical processes designed to make the flow
          of commodities as smooth and efficient as possible.
        </p>
      </div>
    </section>
  );
}

export default About;
