import PropTypes from "prop-types";

function ClientImage({ path }) {
  return (
    <img
      src={path}
      className="md:w-[6rem] md:h-[6rem] w-[7rem] h-[7rem] mt-4 "
    />
  );
}

ClientImage.propTypes = {
  path: PropTypes.any,
};

export default ClientImage;
