import Bigclients from "./Bigclients";
import Otherclients from "./Otherclients";

function Clients() {
  return (
    <section id="clients" className="px-8 mt-16 font-popins">
      <Bigclients />
      <Otherclients />
    </section>
  );
}

export default Clients;
