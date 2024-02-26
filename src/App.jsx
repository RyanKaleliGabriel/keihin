import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./ui/Spinner";
import { LocationProvider } from "./context/LocationContext";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Management = lazy(() => import("./pages/Management"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <LocationProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/management" element={<Management />} />
          </Routes>
        </LocationProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
