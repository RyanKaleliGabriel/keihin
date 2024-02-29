import AppLayout from "../ui/AppLayout";
import Section from "../ui/Section";
import Experiance from "../features/Experiance/Experiance";
import Clients from "../features/Clients/Clients";

function ExperiancePage() {
  return (
    <AppLayout>
      <Experiance />
      <Section>
        <Clients />
      </Section>
    </AppLayout>
  );
}

export default ExperiancePage;
