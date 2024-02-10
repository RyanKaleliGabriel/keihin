import Bluespan from "./Bluespan"
import { CiCircleCheck } from "react-icons/ci";

function About() {
    return (
        <section id="about" className="px-8 mt-16 flex gap-12 font-popins">
            <img src="/about.jpg" alt="About Section Image" className="h-96 w-96" />
            <div className="flex flex-col gap-6 text-justify">
                <h2 className="text-[1.5rem] text-[lightgrey] ">About Company</h2>
                <p className="text-[13px]"><Bluespan>KEIHIN MARITIME SERVICES CO. LTD</Bluespan>  is a registered company and incorporated in the Republic of Kenya. Its main objective is to supply General Hardware, Building blocks, Timber, Repairs, Sand, Hardcore, Food staff and provision of clearing and forwarding services.</p>
                <p className="text-[13px]">It also undertakes building and construction and management agency under management of its sister company Blessed Union Co. Ltd. Other associated companies include Kickdown Co. Ltd, Erikah maritime Servcies, Limugi Co. Ltd and Bahari Storage facility in Meru. </p>
                <div className="text-[13px] flex items-center">
                    <CiCircleCheck className="text-[maroon] text-[16px] mr-2" />
                    <p>Deals with the <Bluespan>management of cargo</Bluespan> as it enters or exits a country.</p>
                </div>
                <div className="text-[13px] flex items-center">
                    <CiCircleCheck className="text-[maroon] text-[24px] mr-2" />
                    <p> It consists of a sequence of <Bluespan>critical processes</Bluespan> designed to make the flow of commodities as smooth and efficient as possible. </p>
                </div>
            </div>

        </section>
    );
}

export default About;
