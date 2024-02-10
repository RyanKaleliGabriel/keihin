import About from "../ui/About";
import AppLayout from "../ui/AppLayout";
import Clients from "../ui/Clients";
import Experiance from "../ui/Experiance";
import Services from "../ui/Services";
import ServicesTwo from "../ui/ServicesTwo";
import Welcome from "../ui/Welcome";
import WhatWeDo from "../ui/WhatWeDo";
import Why from "../ui/Why";

function Home() {
    return (
        <AppLayout>
            <Welcome />
            <About />
            <WhatWeDo />
            <Services />
            <ServicesTwo />
            <Why />
            <Clients />
            <Experiance />
        </AppLayout>
    );
}

export default Home;
