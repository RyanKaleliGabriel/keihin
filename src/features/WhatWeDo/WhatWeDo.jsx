import { HiDocumentText, HiOutlinePaperAirplane, HiCube } from "react-icons/hi";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";

function WhatWeDo() {
  return (
    <section className="font-popins bg-[white] text-justify">
      <h2 className="text-[1.5rem] text-[lightgrey] text-center mt-10">
        What We Do
      </h2>
      <div className=" px-14 py-20">
        <HiDocumentText className="mb-4 text-3xl text-[skyblue]" />
        <p className="font-bold mb-4 text-[16px]">Customs Documentation</p>
        <p className="text-darkgrey text-[12px]">
          One of the key roles of Clearing and Forwarding services is to handle
          all essential customs papers. This comprises the necessary paperwork for
          imports and exports, as well as ensuring that cargo complies with all
          applicable regulations and tariffs.{" "}
        </p>
      </div>
      <div className=" px-14 py-20 bg-lightblue">
        <HiOutlinePaperAirplane className="mb-4 text-3xl text-[skyblue]" />
        <p className="font-bold mb-4 text-[16px] ">Shipping Requirements</p>
        <p className="text-darkgrey text-[12px]">
          Beyond customs documentation, Clearing and Forwarding services
          professionals also take care of all other formal shipping
          requirements. This includes communication and coordination with
          shipping companies, ports, customs, warehouses, and transporters.{" "}
        </p>
      </div>
      <div className=" px-14 py-20">
        <HiOutlineArrowsUpDown className="mb-4 text-3xl text-[skyblue]" />
        <p className="font-bold mb-4 text-[16px]">Imports and Exports</p>
        <p className="text-darkgrey text-[12px]">
          Clearing and forwarding services cover both imports and exports. If
          you're a firm wishing to import goods into Kenya, Keihin marine can
          help you navigate the process. On the other hand, if your goods need
          to depart the region, we can assist with the export formalities.
          Essentially, we bridge the gap between you and your overseas partners.{" "}
        </p>
      </div>
      <div className=" px-14 py-20 bg-lightblue">
        <HiCube className="mb-4 text-3xl text-[skyblue]" />
        <p className="font-bold mb-4 text-[16px] ">Specialized in Projects</p>
        <p className=" text-darkgrey text-[12px]">
          Keihin maritime specializes on projects for domestic and international
          shipments. We understand the unique obstacles associated with each
          type of cargo and personalize our services to your specific
          requirements. Whether it is a shipment from within Kenya or a
          cross-border project from neighboring countries like Tanzania, Uganda,
          or Somalia, we have the knowledge to ensure a smooth flow.
        </p>
      </div>
    </section>
  );
}

export default WhatWeDo;
