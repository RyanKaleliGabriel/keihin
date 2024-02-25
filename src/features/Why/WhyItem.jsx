import PropTypes from "prop-types";

import Bluespan from "../../ui/Bluespan";

function WhyItem({ number, text }) {
  return (
    <div className="rounded-sm border border-[darkgrey] px-12 py-6 text-justify text-[12px]">
      <Bluespan>{number}</Bluespan>
      <p className="text-[darkgrey]">{text}</p>
    </div>
  );
}

WhyItem.propTypes = {
  number: PropTypes.any,
  text: PropTypes.any,
};

export default WhyItem;
