import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
