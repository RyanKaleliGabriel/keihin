import Bluespan from "../../ui/Bluespan";
import clients from "../../devdata/clientsData.json";
import ClientItem from "./ClientItem";

const { list1, list2, list3 } = clients;

function Otherclients() {
  return (
    <div className="mt-12 px-8 bg-lightblue py-20">
      <h2 className="text-[1.5rem] text-[darkgrey] sm:my-5 md:mt-0">
        Other Clients
      </h2>
      <p className="text-sm text-justify text-[grey] mt-5">
        Explore our extensive network of esteemed clients, ranging from industry
        giants to dynamic startups. While logos may not capture them all, the
        essence of these partnerships resonates in every collaboration. Join the
        ranks of businesses that have chosen{" "}
        <Bluespan>Keihin Maritime</Bluespan> as their strategic partner,
        contributing to our diverse community of success stories.
      </p>
      <div className="flex md:flex-row flex-col justify-around text-[grey] text-sm mt-5">
        <ul>
          {list1.map((name, index) => (
            <ClientItem name={name} key={index} />
          ))}
        </ul>
        <ul>
          {list2.map((name, index) => (
            <ClientItem name={name} key={index} />
          ))}
        </ul>
        <ul>
          {list3.map((name, index) => (
            <ClientItem name={name} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Otherclients;
