import { HiChevronUp, HiChevronDown } from "react-icons/hi2";
import PropTypes from "prop-types";

function AccordionItem({ title, content, isOpen, onToggle}) {
  const handleClick = () => {
    onToggle(title);
  };

  return (
    <div className="mb-8">
      <div className="text-[13px] flex items-center">
        <button onClick={handleClick}>
          {isOpen && <HiChevronUp className="text-[16px] mr-2" />}
          {!isOpen && <HiChevronDown className="text-[16px] mr-2" />}
        </button>
        <span className="font-bold text-[maroon] text-[16px]">{title}</span>
      </div>

      {isOpen && (
        <>
          <div className="ml-6 animate__animated animate__fadeInUp">
            <span className="text-[12px]">{content}</span>
          </div>
          <div className="border-b border-[lightgrey] mt-5 animate__animated animate__flipInX"></div>{" "}
        </>
      )}
    </div>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.any,
  content: PropTypes.any,
  isOpen: PropTypes.any,
  onToggle: PropTypes.any,
};

export default AccordionItem;
