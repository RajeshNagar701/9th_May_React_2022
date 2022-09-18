import React from 'react'
import { Link } from "react-router-dom";
function Header() {
  return (


      <div id="wrapper">
        {/*-*/}
        <nav className="navbar-default navbar-static-top" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <h1> <Link className="navbar-brand" to="/dashboard">Minimal</Link></h1>
          </div>
          <div className=" border-bottom">
            <div className="full-left">
              <section className="full-top">
                <button id="toggle"><i className="fa fa-arrows-alt" /></button>
              </section>
              <form className=" navbar-left-right">
                <input type="text" defaultValue="Search..." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search...';}" />
                <input type="submit" defaultValue className="fa fa-search" />
              </form>
              <div className="clearfix"> </div>
            </div>
            {/* Brand and toggle get grouped for better mobile display */}
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="drop-men">
              <ul className=" nav_1">
                <li className="dropdown at-drop">
                  <a href="#" className="dropdown-toggle dropdown-at " data-toggle="dropdown"><i className="fa fa-globe" /> <span className="number">5</span></a>
                  <ul className="dropdown-menu menu1 " role="menu">
                    <li><a href="#">
                      <div className="user-new">
                        <p>New user registered</p>
                        <span>40 seconds ago</span>
                      </div>
                      <div className="user-new-left">
                        <i className="fa fa-user-plus" />
                      </div>
                      <div className="clearfix"> </div>
                    </a></li>
                    <li><a href="#">
                      <div className="user-new">
                        <p>Someone special liked this</p>
                        <span>3 minutes ago</span>
                      </div>
                      <div className="user-new-left">
                        <i className="fa fa-heart" />
                      </div>
                      <div className="clearfix"> </div>
                    </a></li>
                    <li><a href="#">
                      <div className="user-new">
                        <p>John cancelled the event</p>
                        <span>4 hours ago</span>
                      </div>
                      <div className="user-new-left">
                        <i className="fa fa-times" />
                      </div>
                      <div className="clearfix"> </div>
                    </a></li>
                    <li><a href="#">
                      <div className="user-new">
                        <p>The server is status is stable</p>
                        <span>yesterday at 08:30am</span>
                      </div>
                      <div className="user-new-left">
                        <i className="fa fa-info" />
                      </div>
                      <div className="clearfix"> </div>
                    </a></li>
                    <li><a href="#">
                      <div className="user-new">
                        <p>New comments waiting approval</p>
                        <span>Last Week</span>
                      </div>
                      <div className="user-new-left">
                        <i className="fa fa-rss" />
                      </div>
                      <div className="clearfix"> </div>
                    </a></li>
                    <li><a href="#" className="view">View all messages</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle dropdown-at" data-toggle="dropdown"><span className=" name-caret">Rackham<i className="caret" /></span><img src="images/wo.jpg" /></a>
                  <ul className="dropdown-menu " role="menu">
                    <li><a href="profile.html"><i className="fa fa-user" />Edit Profile</a></li>
                    <li><a href="inbox.html"><i className="fa fa-envelope" />Inbox</a></li>
                    <li><a href="calendar.html"><i className="fa fa-calendar" />Calender</a></li>
                    <li><a href="inbox.html"><i className="fa fa-clipboard" />Tasks</a></li>
                  </ul>
                </li>
              </ul>
            </div>{/* /.navbar-collapse */}
            <div className="clearfix">
            </div>
            <div className="navbar-default sidebar" role="navigation">
              <div className="sidebar-nav navbar-collapse">
                <ul className="nav" id="side-menu">
                  <li>
                    <Link to="/dashboard" className=" hvr-bounce-to-right"><i className="fa fa-dashboard nav_icon " /><span className="nav-label">Dashboards</span> </Link>
                  </li>
                  <li>
                    <Link to="#" className=" hvr-bounce-to-right"><i className="fa fa-indent nav_icon" /> <span className="nav-label">Category</span><span className="fa arrow" /></Link>
                    <ul className="nav nav-second-level">
                      <li><Link to="/add_category" className=" hvr-bounce-to-right"> <i className="fa fa-area-chart nav_icon" />Add Category</Link></li>
                      <li><Link to="/manage_category" className=" hvr-bounce-to-right"><i className="fa fa-map-marker nav_icon" />Manage Category</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/manage_contact" className=" hvr-bounce-to-right"><i className="fa fa-dashboard nav_icon " /><span className="nav-label">Contact</span> </Link>
                  </li>
                  <li>
                    <Link to="/manage_customer" className=" hvr-bounce-to-right"><i className="fa fa-dashboard nav_icon " /><span className="nav-label">Customer</span> </Link>
                  </li>
                  <li>
                    <Link to="/add_product" className=" hvr-bounce-to-right"><i className="fa fa-dashboard nav_icon " /><span className="nav-label">Add Product</span> </Link>
                  </li>
                  <li>
                    <Link to="/manage_product" className=" hvr-bounce-to-right"><i className="fa fa-dashboard nav_icon " /><span className="nav-label">Manage Product</span> </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div></nav>
      </div>

  )
}

export default Header