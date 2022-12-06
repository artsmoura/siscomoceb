import React from "react";
import Navbar from "./components/Navbar";
import EventPage from "./modules/Events";
import FormEvent from "./modules/Events/FormEvent";
import './style.css';

const App = () => {
    return (
        <div className="container">
            <Navbar />
            <EventPage />
            {/* <FormEvent /> */}
        </div>
    );
};

export default App;