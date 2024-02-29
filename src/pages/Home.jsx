import Section from "../ui/Section";
import About from "../features/About/About";
import AppLayout from "../ui/AppLayout";
import Welcome from "../features/Landing/Welcome";
import Mission from "../features/Mission/Mission";
import More from "../features/About/More";


function Home() {
  return (
    <AppLayout>
      <Welcome />
      <Section>
        <About />
      </Section>
      <Section>
        <More />
      </Section>
      <Section>
        <Mission />
      </Section>
    </AppLayout>
  );
}


export default Home;
