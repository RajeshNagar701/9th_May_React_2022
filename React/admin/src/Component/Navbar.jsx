import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <NavLink className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </NavLink>
            {/* hello Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
                <NavLink className="nav-link" to="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span></NavLink>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">
                Interface
            </div>
           
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                    <i className="fas fa-fw fa-folder" />
                    <span>Categories</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Categories</h6>
                        <NavLink className="collapse-item" to="/add_category">Add_categories</NavLink>
                        <NavLink className="collapse-item" to="/manage_category">Manage Categories</NavLink>
                    </div>
                </div>
            </li>
         
            <li className="nav-item">
                <NavLink className="nav-link" to="/manage_user">
                    <i className="fas fa-fw fa-table" />
                    <span>User</span></NavLink>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" />
            </div>
        </ul>

    )
}

export default Navbar