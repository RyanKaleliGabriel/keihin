import ClientImage from "./ClientImage";
import images from "../../devdata/clientimages.json";

const { list1, list2 } = images;

function Bigclients() {
  return (
    <>
      <div>
        <h2 className="text-[1.5rem] text-nrmblue text-center sm:my-5 md:mt-0">
          Our Trusted Clients
        </h2>
        <p className="text-sm text-center text-[grey] mt-5">
          Explore our valued clients, a tapestry of trusted partnerships and
          shared success. Each logo represents a journey we've undertaken with
          industry leaders, startups, and innovative organizations. We're proud
          to have earned their trust and look forward to continuing to deliver
          exceptional results together.
        </p>
      </div>
      <div className="mt-10">
        <div className="flex flex-wrap  justify-around">
          {list1.map((image, index) => (
            <ClientImage path={image} key={index} />
          ))}
        </div>
        <div className="flex flex-wrap  justify-around mt-10">
          {list2.map((image, index) => (
            <ClientImage path={image} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Bigclients;
