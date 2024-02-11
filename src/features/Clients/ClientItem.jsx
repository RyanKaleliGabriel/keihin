import Proptypes from "prop-types"
import { CiCircleCheck } from "react-icons/ci";

function ClientItem({ name }) {
  return (
    <li>
      <div className="text-[13px] flex items-center mb-3 ">
        <CiCircleCheck className="text-[skyblue] text-[16px] mr-2" />
        <span>{name}</span>
      </div>
    </li>
  );
}

ClientItem.propTypes = {
  name: Proptypes.any,
};

export default ClientItem;
