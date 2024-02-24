import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

import About from "../features/About/About";
import AppLayout from "../ui/AppLayout";
import Clients from "../features/Clients/Clients";
import Experiance from "../features/Experiance/Experiance";
import Services from "../features/Services/Services";
import ServicesTwo from "../features/Services/ServicesTwo";
import Welcome from "../features/Landing/Welcome";
import WhatWeDo from "../features/WhatWeDo/WhatWeDo";
import Why from "../features/Why/Why";

function Section({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px",
  });

  return (
    <div
      ref={ref}
      className={inView ? "animate__animated animate__fadeInUp" : ""}
    >
      {children}
    </div>
  );
}

function Home() {
  return (
    <AppLayout>
      <Welcome />
      <About />
      <Section>
        <WhatWeDo />
      </Section>
      <Section>
        <Services />
      </Section>
      <Section>
        <ServicesTwo />
      </Section>
      <Section>
        <Why />
      </Section>
      <Section>
        <Clients />
      </Section>
      <Section>
        <Experiance />
      </Section>
    </AppLayout>
  );
}

Section.propTypes = {
  children: PropTypes.any,
};

export default Home;
