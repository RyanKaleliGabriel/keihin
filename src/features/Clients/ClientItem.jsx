import { FaCheckCircle } from "react-icons/fa";
import PropTypes from "prop-types";

function ClientItem({ name }) {
  return (
    <div className=" flex items-center mb-3 gap-2">
      <FaCheckCircle className="text-green" />
      <li>{name}</li>
    </div>
  );
}

ClientItem.propTypes = {
  name: PropTypes.any,
};

export default ClientItem;
