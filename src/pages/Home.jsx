import About from "../ui/About";
import AppLayout from "../ui/AppLayout";
import Services from "../ui/Services";
import ServicesTwo from "../ui/ServicesTwo";
import Welcome from "../ui/Welcome";
import WhatWeDo from "../ui/WhatWeDo";

function Home() {
    return (
        <AppLayout>
            <Welcome />
            <About />
            <WhatWeDo />
            <Services />
            <ServicesTwo />
        </AppLayout>
    );
}

export default Home;
