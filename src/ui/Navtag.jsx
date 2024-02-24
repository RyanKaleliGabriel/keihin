import PropTypes from "prop-types";

function Navtag({ tag, children, isActive , visible}) {
  const activeClass = isActive ? "bg-navblue" : "";
  const notVisible = visible === "false" ? "hidden": ""
  return (
    <a href={tag}  className={`text-nrmblue px-3 py-1 rounded hover:bg-navblue transition-all ease-in-out ${notVisible} ${activeClass} `}>
      {children}
    </a>
  );
}

Navtag.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.any,
  isActive: PropTypes.bool,
  visible: PropTypes.string
};

export default Navtag;
