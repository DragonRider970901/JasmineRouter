import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";


function Root() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Jasminerouter</h1>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='about'>About Us</NavLink>
                    <NavLink to='help'>Help</NavLink>
                    <NavLink to='careers'>Careers</NavLink>
                </nav>
                <Breadcrumbs />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Root;