import AppLayout from "../ui/AppLayout";

function Home() {
    return (
        <AppLayout>
            <section id="Home" className="bg-[url('/welcome.jpg')] font-popins text-center py-36 bg-cover bg-center">
                <div className="mb-20">
                    <h2 className="text-[1.5rem] text-[white]">Welcome to Keihin</h2>
                    <p className="text-[lightgrey]">At its essence, it is the management of cargo as it enters or exits a country.</p>
                </div>
            </section>
        </AppLayout>
    );
}

export default Home;
