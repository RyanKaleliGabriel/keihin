import ExperienceBrief from "./ExperienceBrief";
import ExperienceStat from "./ExperienceStat";

function Experiance() {
  return (
    <section id="Experiance" className="mt-16 font-popins mb-8 bg-lightblue py-20">
      <h2 className="text-[1.5rem] text-[darkgrey] text-center">
        Experience and WorkForce
      </h2>
      <ExperienceStat />
      <ExperienceBrief />
    </section>
  );
}

export default Experiance;
