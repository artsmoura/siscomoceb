import React from "react";
import Navbar from "./components/Navbar/navbar";
import EventPage from "./modules/Events/events";
import FormEvent from "./modules/Events/FormEvent/formEvent";
import {
    Routes,
    Route
} from "react-router-dom";
import './style.css';
import Auth from "./modules/Auth/auth";

const App = () => {
    return (
        <div className="container">
            <Navbar />
            <div className="pageBox">
                <Routes>
                    <Route path="login" element={<Auth />} />
                    <Route index element={<EventPage />} />
                    <Route path="criarevento" element={<FormEvent />} />
                    {/* <Route path="/" exact element={<Navigate replace to="/login" />} /> */}
                </Routes>
            </div>
        </div>
    );
};

export default App;