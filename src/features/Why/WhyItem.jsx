import PropTypes from "prop-types";

import Bluespan from "../../ui/Bluespan";

function WhyItem({ number, text }) {
  return (
    <div className="border-2 border-[lightgrey] px-12 py-6 text-justify text-[12px]">
      <Bluespan>{number}</Bluespan>
      <p>{text}</p>
    </div>
  );
}

WhyItem.propTypes = {
  number: PropTypes.any,
  text: PropTypes.any,
};

export default WhyItem;
