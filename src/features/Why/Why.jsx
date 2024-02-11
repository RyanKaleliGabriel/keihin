import WhyItem from "./WhyItem";
import whyData from "../../devdata/why.json";

function Why() {
  return (
    <section id="why" className="px-8 mt-16 font-popins">
      <h2 className="text-[1.5rem] text-[lightgrey] text-center">
        Why are Clearing and Forwarding Services Important?
      </h2>
      <div className="flex flex-col gap-10 mt-12">
        {whyData.map((item) => (
          <WhyItem key={item.number} number={item.number} text={item.text} />
        ))}
      </div>
    </section>
  );
}

export default Why;
