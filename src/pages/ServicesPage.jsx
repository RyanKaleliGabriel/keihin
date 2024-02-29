import Section from "../ui/Section";
import AppLayout from "../ui/AppLayout";
import WhatWeDo from "../features/WhatWeDo/WhatWeDo";
import Services from "../features/Services/Services";
import ServicesTwo from "../features/Services/ServicesTwo";

function ServicesPage() {
  return (
    <AppLayout>
      <Services />
      <Section>
        <ServicesTwo />
      </Section>
      <Section>
        <WhatWeDo />
      </Section>
    </AppLayout>
  );
}

export default ServicesPage;
