import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes,} from "react-router-dom";

// import Home from "./pages/Home"
// import Contact from "./pages/Contact"
import Spinner from "./ui/Spinner";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
