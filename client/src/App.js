import React from "react";
import Navbar from "./components/Navbar";
import EventPage from "./modules/Events";
import FormEvent from "./modules/Events/FormEvent";
import {
    Routes,
    Route
} from "react-router-dom";
import './style.css';

const App = () => {
    return (
        <div className="container">
            <Navbar />
            <div className="pageBox">
                <Routes>
                    <Route index element={<EventPage />} />
                    <Route path="criarevento" element={<FormEvent />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;