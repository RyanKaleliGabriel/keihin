import Bluespan from "../../ui/Bluespan";
import AccordionItem from "./AccordionItem";
import vmaData from "../../devdata/vma.json";
import { useState } from "react";

function Experiance() {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (itemId) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === itemId ? null : itemId));
  };

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
        <div className="text-[13px] text-justify lg:mr-24 sm:mt-5 md:mt-0 w-full">
          {vmaData.map((item) => (
            <AccordionItem
              key={item.title}
              title={item.title}
              content={item.content}
              isOpen={openItem === item.title}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiance;
