import React from 'react'
import { Link, NavLink} from 'react-router-dom';


function Footer() {
  return (
      <div>
          <div className="footer">
              <div className="container">
                  <div className="footer-top">
                      <div className="col-md-6 top-footer animated wow fadeInLeft" data-wow-delay=".5s">
                          <h3>Follow Us On</h3>
                          <div className="social-icons">
                              <ul className="social">
                                  <li><a href="#"><i /></a> </li>
                                  <li><a href="#"><i className="facebook" /></a></li>
                                  <li><a href="#"><i className="google" /> </a></li>
                                  <li><a href="#"><i className="linked" /> </a></li>
                              </ul>
                              <div className="clearfix" />
                          </div>
                      </div>
                      <div className="col-md-6 top-footer1 animated wow fadeInRight" data-wow-delay=".5s">
                          <h3>Newsletter</h3>
                          <form action="#" method="post">
                              <input type="text" name="email" defaultValue onfocus="this.value='';" onblur="if (this.value == '') {this.value ='';}" />
                              <input type="submit" defaultValue="SUBSCRIBE" />
                          </form>
                      </div>
                      <div className="clearfix"> </div>
                  </div>
              </div>
              <div className="footer-bottom">
                  <div className="container">
                      <div className="col-md-3 footer-bottom-cate animated wow fadeInLeft" data-wow-delay=".5s">
                          <h6>Categories</h6>
                          <ul>
                              <li><Link to="/products">Curabitur sapien</Link></li>
                              <li><Link to="/single">Dignissim purus</Link></li>
                              <li><Link to="/men">Tempus pretium</Link></li>
                              <li><Link to="/products">Dignissim neque</Link></li>
                              <li><Link to="/single">Ornared id aliquet</Link></li>
                          </ul>
                      </div>
                      <div className="col-md-3 footer-bottom-cate animated wow fadeInLeft" data-wow-delay=".5s">
                          <h6>Feature Projects</h6>
                          <ul>
                              <li><Link to="/products">Dignissim purus</Link></li>
                              <li><Link to="/men">Curabitur sapien</Link></li>
                              <li><Link to="/single">Tempus pretium</Link></li>
                              <li><Link to="/men">Dignissim neque</Link></li>
                              <li><Link to="/products">Ornared id aliquet</Link></li>
                          </ul>
                      </div>
                      <div className="col-md-3 footer-bottom-cate animated wow fadeInRight" data-wow-delay=".5s">
                          <h6>Top Brands</h6>
                          <ul>
                              <li><Link to="/products">Tempus pretium</Link></li>
                              <li><Link to="/single">Curabitur sapien</Link></li>
                              <li><Link to="/men">Dignissim purus</Link></li>
                              <li><Link to="/single">Dignissim neque</Link></li>
                              <li><Link to="/men">Ornared id aliquet</Link></li>
                          </ul>
                      </div>
                      <div className="col-md-3 footer-bottom-cate cate-bottom animated wow fadeInRight" data-wow-delay=".5s">
                          <h6>Our Address</h6>
                          <ul>
                              <li><i className="glyphicon glyphicon-map-marker" aria-hidden="true" />Address : 12th Avenue, 5th block, <span>Sydney.</span></li>
                              <li><i className="glyphicon glyphicon-envelope" aria-hidden="true" />Email : <a href="mailto:info@example.com">info@example.com</a></li>
                              <li><i className="glyphicon glyphicon-earphone" aria-hidden="true" />Phone : +1234 567 567</li>
                          </ul>
                      </div>
                      <div className="clearfix"> </div>
                      <p className="footer-class animated wow fadeInUp animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}> © 2016 Youth Fashion . All Rights Reserved | Design by <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
                  </div>
              </div>
          </div>
      </div>

  )
}

export default Footer