import About from "../features/About/About";
import AppLayout from "../ui/AppLayout";
import Clients from "../features/Clients/Clients";
import Experiance from "../features/Experiance/Experiance";
import Services from "../features/Services/Services";
import ServicesTwo from "../features/Services/ServicesTwo";
import Welcome from "../features/Landing/Welcome";
import WhatWeDo from "../features/WhatWeDo/WhatWeDo";
import Why from "../features/Why/Why";

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
