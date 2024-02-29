import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

function Section({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px",
  });

  return (
    <div
      ref={ref}
      className={
        inView ? "animate__animated animate__fadeInUp animate__delay-1.5s " : ""
      }
    >
      {children}
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.any,
};

export default Section;
