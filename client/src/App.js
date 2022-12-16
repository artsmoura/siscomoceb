import React from "react";
import Navbar from "./components/Navbar/navbar";
import EventPage from "./modules/Events/events";
import FormEvent from "./modules/Events/FormEvent/formEvent";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import './style.css';
import Auth from "./modules/Auth/auth";

const App = () => {
    const loginPage = window.location.pathname;
    const userLogin = localStorage.getItem('profile');
    const navigate = useNavigate();

    return (
        <div className="container">
            {navigate(0)}
            {loginPage !== '/login' ? <Navbar /> : null}
            <div className="pageBox">
                <Routes>
                    {userLogin && <Route path="/" element={<EventPage />} />}
                    <Route path="login" element={<Auth />} />
                    <Route path="criarevento" element={<FormEvent />} />
                    <Route path="/" exact element={<Navigate replace to="/login" />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;