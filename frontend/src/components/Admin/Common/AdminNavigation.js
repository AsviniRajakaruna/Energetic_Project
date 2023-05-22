import React from 'react';

function AdminNavigation() {
    return (
        <ul className="navbar-nav bg-gradient-orange sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="far fa-lightbulb"/>
                </div>
                <div className="sidebar-brand-text mx-3">Enegetic</div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0"></hr>

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <a className="nav-link" href="#">
                    <i className="fas fa-fw fa-tachometer-alt"/>
                    <span>Dashboard</span></a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider"></hr>

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Options
            </div>

            <li className="nav-item">
                <a className="nav-link" href="#"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-seedling"></i>
                    <span>Energy Consumption</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-calculator"/>
                    <span>Bill Calculation</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-solar-panel"/>
                    <span>Energy Sources</span>
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-shopping-cart"/>
                    <span>Orders</span>
                </a>
            </li>


            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block"></hr>

            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
    )
}

export default AdminNavigation;