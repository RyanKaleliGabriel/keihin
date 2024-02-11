import ClientItem from "./ClientItem";
import clientsData from "../../devdata/clientsData.json";

function Clients() {
  const {list1, list2} = clientsData;

  return (
    <section id="clients" className="px-8 mt-16 md:flex lg:gap-12 font-popins">
      <img
        src="clients.jpg"
        alt="Client Section Image"
        className=" sm:h-80 md:h-96 lg:h-100 w-96"
      />
      <div className="md:ml-12 ">
        <h2 className="text-[1.5rem] text-[lightgrey] sm:mt-5 md:mt-0">
          Our Clients
        </h2>
        <p className="text-[13px] text-justify">
          Our company has 8 (Eight) clients of general cargo commodities such as
          Rice, cooking oil, spare parts, telecommunication cables and
          communication instruments and gadgets, who actually give us
          approximately 100 containers every month
        </p>

        <div className="flex justify-self-start gap-12 mt-5">
          <ul>
            {list1.map((item, index) => (
              <ClientItem key={index} name={item} />
            ))}
          </ul>

          <ul>
            {list2.map((item, index) => (
              <ClientItem key={index} name={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Clients;
