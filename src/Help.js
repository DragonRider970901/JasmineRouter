import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Help() {
    return (
        <div className="help-layout">
            <h1>Help</h1>
            <p>Lorem ipsum sit amet...</p>

            <nav>
                <NavLink to='faq'>FAQ</NavLink>
                <NavLink to='contact'>Contact Us</NavLink>
            </nav>
            <Outlet />


        </div>
    );
}

export default Help;