import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../styles/App.scss';
import Header from '../../widgets/header/Header';
import Footer from '../../widgets/footer/Footer';
import Home from '../../pages/home/Home';
import Gallery from '../../pages/gallery/Gallery';
function App() {
    const routesArr = [
       
        {
            path: '/gallery',
            element: <Gallery />,
        }
    ];

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />} />  
                {routesArr?.map((item, index) => (
                    <Route key={index} path={item.path} element={item.element} />
                ))}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
