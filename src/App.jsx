import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./ui/Spinner";
import { LocationProvider } from "./context/LocationContext";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Management = lazy(() => import("./pages/Management"));
const ExperiencePage = lazy(() => import("./pages/ExperiancePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <LocationProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/management" element={<Management />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LocationProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
