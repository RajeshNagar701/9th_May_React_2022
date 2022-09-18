import React from 'react'

function Dashboard() {
    return (

        
            <div id="page-wrapper" className="gray-bg dashbard-1">
                <div className="content-main">
                    {/*banner*/}
                    <div className="banner">
                        <h2>
                            <a href="index.html">Home</a>
                            <i className="fa fa-angle-right" />
                            <span>Dashboard</span>
                        </h2>
                    </div>
                    {/*//banner*/}
                </div>
                {/*content*/}
                <div className="content-top">
                    <div className="col-md-4 ">
                        <div className="content-top-1">
                            <div className="col-md-6 top-content">
                                <h5>Tasks</h5>
                                <label>8761</label>
                            </div>
                            <div className="col-md-6 top-content1">
                                <div id="demo-pie-1" className="pie-title-center" data-percent={25}> <span className="pie-value" /> </div>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="content-top-1">
                            <div className="col-md-6 top-content">
                                <h5>Points</h5>
                                <label>6295</label>
                            </div>
                            <div className="col-md-6 top-content1">
                                <div id="demo-pie-2" className="pie-title-center" data-percent={50}> <span className="pie-value" /> </div>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="content-top-1">
                            <div className="col-md-6 top-content">
                                <h5>Cards</h5>
                                <label>3401</label>
                            </div>
                            <div className="col-md-6 top-content1">
                                <div id="demo-pie-3" className="pie-title-center" data-percent={75}> <span className="pie-value" /> </div>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                    <div className="col-md-8 content-top-2">
                        {/*-start-chart--*/}
                        {/*-*/}
                        <div className="content-graph">
                            <div className="content-color">
                                <div className="content-ch"><p><i />Chrome </p><span>100%</span>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="content-ch1"><p><i />Safari</p><span> 50%</span>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                            <div className="graph-container">
                                <div id="graph-lines"> </div>
                                <div id="graph-bars"> </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                {/**/}
                <div className="content-mid">
                    <div className="col-md-5">
                        <div className="cal1 cal_2"><div className="clndr"><div className="clndr-controls"><div className="clndr-control-button"><p className="clndr-previous-button">previous</p></div><div className="month">July 2015</div><div className="clndr-control-button rightalign"><p className="clndr-next-button">next</p></div></div><table className="clndr-table" border={0} cellSpacing={0} cellPadding={0}><thead><tr className="header-days"><td className="header-day">S</td><td className="header-day">M</td><td className="header-day">T</td><td className="header-day">W</td><td className="header-day">T</td><td className="header-day">F</td><td className="header-day">S</td></tr></thead><tbody><tr><td className="day adjacent-month last-month calendar-day-2015-06-28"><div className="day-contents">28</div></td><td className="day adjacent-month last-month calendar-day-2015-06-29"><div className="day-contents">29</div></td><td className="day adjacent-month last-month calendar-day-2015-06-30"><div className="day-contents">30</div></td><td className="day calendar-day-2015-07-01"><div className="day-contents">1</div></td><td className="day calendar-day-2015-07-02"><div className="day-contents">2</div></td><td className="day calendar-day-2015-07-03"><div className="day-contents">3</div></td><td className="day calendar-day-2015-07-04"><div className="day-contents">4</div></td></tr><tr><td className="day calendar-day-2015-07-05"><div className="day-contents">5</div></td><td className="day calendar-day-2015-07-06"><div className="day-contents">6</div></td><td className="day calendar-day-2015-07-07"><div className="day-contents">7</div></td><td className="day calendar-day-2015-07-08"><div className="day-contents">8</div></td><td className="day calendar-day-2015-07-09"><div className="day-contents">9</div></td><td className="day calendar-day-2015-07-10"><div className="day-contents">10</div></td><td className="day calendar-day-2015-07-11"><div className="day-contents">11</div></td></tr><tr><td className="day calendar-day-2015-07-12"><div className="day-contents">12</div></td><td className="day calendar-day-2015-07-13"><div className="day-contents">13</div></td><td className="day calendar-day-2015-07-14"><div className="day-contents">14</div></td><td className="day calendar-day-2015-07-15"><div className="day-contents">15</div></td><td className="day calendar-day-2015-07-16"><div className="day-contents">16</div></td><td className="day calendar-day-2015-07-17"><div className="day-contents">17</div></td><td className="day calendar-day-2015-07-18"><div className="day-contents">18</div></td></tr><tr><td className="day calendar-day-2015-07-19"><div className="day-contents">19</div></td><td className="day calendar-day-2015-07-20"><div className="day-contents">20</div></td><td className="day calendar-day-2015-07-21"><div className="day-contents">21</div></td><td className="day calendar-day-2015-07-22"><div className="day-contents">22</div></td><td className="day calendar-day-2015-07-23"><div className="day-contents">23</div></td><td className="day calendar-day-2015-07-24"><div className="day-contents">24</div></td><td className="day calendar-day-2015-07-25"><div className="day-contents">25</div></td></tr><tr><td className="day calendar-day-2015-07-26"><div className="day-contents">26</div></td><td className="day calendar-day-2015-07-27"><div className="day-contents">27</div></td><td className="day calendar-day-2015-07-28"><div className="day-contents">28</div></td><td className="day calendar-day-2015-07-29"><div className="day-contents">29</div></td><td className="day calendar-day-2015-07-30"><div className="day-contents">30</div></td><td className="day calendar-day-2015-07-31"><div className="day-contents">31</div></td><td className="day adjacent-month next-month calendar-day-2015-08-01"><div className="day-contents">1</div></td></tr></tbody></table></div></div>
                    </div>
                    <div className="col-md-7 mid-content-top">
                        <div className="middle-content">
                            <h3>Latest Images</h3>
                            {/* start content_slider */}
                            <div id="owl-demo" className="owl-carousel text-center">
                                <div className="item">
                                    <img className="lazyOwl img-responsive" data-src="images/na.jpg" alt="name" />
                                </div>
                                <div className="item">
                                    <img className="lazyOwl img-responsive" data-src="images/na1.jpg" alt="name" />
                                </div>
                                <div className="item">
                                    <img className="lazyOwl img-responsive" data-src="images/na2.jpg" alt="name" />
                                </div>
                                <div className="item">
                                    <img className="lazyOwl img-responsive" data-src="images/na.jpg" alt="name" />
                                </div>
                                <div className="item">
                                    <img className="lazyOwl img-responsive" data-src="images/na1.jpg" alt="name" />
                                </div>
                                <div className="item">
                                    <img className="lazyOwl img-responsive" data-src="images/na2.jpg" alt="name" />
                                </div>
                                <div className="item">
                                    <img className="lazyOwl img-responsive" data-src="images/na.jpg" alt="name" />
                                </div>
                            </div>
                        </div>
                        {/* //requried-jsfiles-for owl */}
                    </div>
                    <div className="clearfix"> </div>
                </div>
                {/*-*/}
                <div className="content-bottom">
                    <div className="col-md-6 post-top">
                        <div className="post">
                            <form className="text-area">
                                <textarea required defaultValue={" What are you doing..."} />
                            </form>
                            <div className="post-at">
                                <ul className="icon">
                                    <div className="post-file">
                                        <i className="fa fa-location-arrow" />
                                        <input id="input-1" name="input1[]" type="file" multiple className />
                                    </div>
                                    <div className="post-file">
                                        <i className="fa fa-camera" />
                                        <input id="input-2" name="input2[]" type="file" multiple className />
                                    </div>
                                    <div className="post-file">
                                        <i className="fa fa-video-camera" />
                                        <input id="input-3" name="input3[]" type="file" multiple className />
                                    </div>
                                    <div className="post-file">
                                        <i className="fa fa-microphone" />
                                        <input id="input-4" name="input4[]" type="file" multiple className />
                                    </div>
                                </ul>
                                <form className="text-sub">
                                    <input type="submit" defaultValue="post" />
                                </form>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className="post-bottom">
                            <div className="post-bottom-1">
                                <a href="#"><i className="fa fa-facebook" /></a>
                                <p>15k <label>Likes</label></p>
                            </div>
                            <div className="post-bottom-2">
                                <a href="#"><i className="fa fa-twitter" /></a>
                                <p>20M <label>Followers</label></p>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="weather">
                            <div className="weather-top">
                                <div className="weather-top-left">
                                    <div className="degree">
                                        <figure className="icons">
                                            <canvas id="partly-cloudy-day" width={64} height={64}>
                                            </canvas>
                                        </figure>
                                        <span>37°</span>
                                        <div className="clearfix" />
                                    </div>
                                    <p>FRIDAY
                                        <label>13</label>
                                        <sup>th</sup>
                                        AUG
                                    </p>
                                </div>
                                <div className="weather-top-right">
                                    <p><i className="fa fa-map-marker" />lorem ipsum</p>
                                    <label>lorem ipsum</label>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="weather-bottom">
                                <div className="weather-bottom1">
                                    <div className="weather-head">
                                        <h4>Cloudy</h4>
                                        <figure className="icons">
                                            <canvas id="cloudy" width={58} height={58} />
                                        </figure>
                                        <h6>20°</h6>
                                        <div className="bottom-head">
                                            <p>August 16</p>
                                            <p>Monday</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="weather-bottom1 ">
                                    <div className="weather-head">
                                        <h4>Sunny</h4>
                                        <figure className="icons">
                                            <canvas id="clear-day" width={58} height={58}>
                                            </canvas>
                                        </figure>
                                        <h6>37°</h6>
                                        <div className="bottom-head">
                                            <p>August 17</p>
                                            <p>Tuesday</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="weather-bottom1">
                                    <div className="weather-head">
                                        <h4>Rainy</h4>
                                        <figure className="icons">
                                            <canvas id="sleet" width={58} height={58}>
                                            </canvas>
                                        </figure>
                                        <h6>7°</h6>
                                        <div className="bottom-head">
                                            <p>August 18</p>
                                            <p>Wednesday</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="weather-bottom1 ">
                                    <div className="weather-head">
                                        <h4>Snowy</h4>
                                        <figure className="icons">
                                            <canvas id="snow" width={58} height={58}>
                                            </canvas>
                                        </figure>
                                        <h6>-10°</h6>
                                        <div className="bottom-head">
                                            <p>August 16</p>
                                            <p>Thursday</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
                {/*//content*/}
            </div>

 
    )
}
export default Dashboard