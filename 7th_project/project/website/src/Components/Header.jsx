import React from 'react'
import { Link, useNavigate, } from 'react-router-dom';
import swal from 'sweetalert'
function Header() {
  const navigate1=useNavigate();
  function logout()
  {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_email');
    localStorage.removeItem('auth_localId');
    swal("Success", "Logout Success", "success");
    navigate1('/account');
    
  }  


  return (
    <>
       
          <div className="header">
              <div className="header-top">
                  <div className="container">
                      <div className="col-sm-4 logo animated wow fadeInLeft" data-wow-delay=".5s">
                          <h1><Link to="/index">Youth <span>Fashion</span></Link></h1>
                      </div>
                      <div className="col-sm-4 world animated wow fadeInRight" data-wow-delay=".5s">
                          <div className="cart box_1">
                          <Link to="/checkout">
                                  <h3> <div className="total">
                                      <span className="simpleCart_total" /></div>
                                      <img src="images/cart.png" alt /></h3>
                              </Link>
                              <p><a href="javascript:;" className="simpleCart_empty">Empty Cart</a></p>
                          </div>
                      </div>
                      <div className="col-sm-2 number animated wow fadeInRight" data-wow-delay=".5s">
                          <span><i className="glyphicon glyphicon-phone" />085 596 234</span>
                          <p>Call me</p>
                      </div>
                      <div className="col-sm-2 search animated wow fadeInRight" data-wow-delay=".5s">
                          <a className="play-icon popup-with-zoom-anim" href="#small-dialog"><i className="glyphicon glyphicon-search"> </i> </a>
                      </div>
                      <div className="clearfix"> </div>
                  </div>
              </div>
              <div className="container">
                  <div className="head-top">
                      <div className="n-avigation">
                          <nav className="navbar nav_bottom" role="navigation">
                              {/* Brand and toggle get grouped for better mobile display */}
                              <div className="navbar-header nav_2">
                                  <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                                      <span className="sr-only">Toggle navigation</span>
                                      <span className="icon-bar" />
                                      <span className="icon-bar" />
                                      <span className="icon-bar" />
                                  </button>
                                  <a className="navbar-brand" href="#" />
                              </div>
                              {/* Collect the nav links, forms, and other content for toggling */}
                              <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                                  <ul className="nav navbar-nav nav_1">
                                      <li><Link to="/index">Home</Link></li>
                                      <li><Link to="/products">Products</Link></li>
                                      
                                    
                                      {(() => {
                                    
                                       if(localStorage.getItem('auth_localId'))
                                       {
                                         return (<><li><Link to="/">Profile</Link></li>
                                         <li><Link to="/index" onClick={logout} >Logout</Link></li></>)
                                       }
                                       else {
                                        return (
                                            <li><Link to="/account">Sign In</Link></li>
                                            )
                                       }
                                    })()}
                                      
                                     
                                      <li className="last"><Link to="/contact">Contact</Link></li>
                                  </ul>
                              </div>{/* /.navbar-collapse */}
                          </nav>
                      </div>
                      <div className="clearfix"> </div>
                     
                      <div id="small-dialog" className="mfp-hide">
                          <div className="search-top">
                              <div className="login">
                                  <form action="#" method="post">
                                      <input type="submit" defaultValue />
                                      <input type="text" name="search" defaultValue="Type something..." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = '';}" />
                                  </form>
                              </div>
                              <p>	Shopping</p>
                          </div>
                      </div>
                      {/**/}
                  </div>
              </div>
          </div>

    </>
  )
}

export default Header