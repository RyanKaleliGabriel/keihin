import About from "../ui/About";
import AppLayout from "../ui/AppLayout";
import Welcome from "../ui/Welcome";
import WhatWeDo from "../ui/WhatWeDo";

function Home() {
    return (
        <AppLayout>
            <Welcome />
            <About />
            <WhatWeDo />
        </AppLayout>
    );
}

export default Home;
