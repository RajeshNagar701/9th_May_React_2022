import React from 'react'

function Single_Prod() {
    return (
        <div>
            <div className="breadcrumbs">
                <div className="container">
                    <ol className="breadcrumb breadcrumb1 animated wow slideInLeft animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'slideInLeft' }}>
                        <li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true" />Home</a></li>
                        <li className="active">Single</li>
                    </ol>
                </div>
            </div>
            <div className="single">
                <div className="container">
                    <div className="col-md-9">
                        <div className="col-md-5 grid">
                            <div className="flexslider">
                                <ul className="slides">
                                    <li data-thumb="images/si.jpg">
                                        <div className="thumb-image"> <img src="images/si.jpg" data-imagezoom="true" className="img-responsive" /> </div>
                                    </li>
                                    <li data-thumb="images/si1.jpg">
                                        <div className="thumb-image"> <img src="images/si1.jpg" data-imagezoom="true" className="img-responsive" /> </div>
                                    </li>
                                    <li data-thumb="images/si2.jpg">
                                        <div className="thumb-image"> <img src="images/si2.jpg" data-imagezoom="true" className="img-responsive" /> </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-7 single-top-in">
                            <div className="single-para simpleCart_shelfItem">
                                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h2>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                <div className="star-on">
                                    <ul>
                                        <li><a href="#"><i className="glyphicon glyphicon-star"> </i></a></li>
                                        <li><a href="#"><i className="glyphicon glyphicon-star"> </i></a></li>
                                        <li><a href="#"><i className="glyphicon glyphicon-star"> </i></a></li>
                                        <li><a href="#"><i className="glyphicon glyphicon-star"> </i></a></li>
                                        <li><a href="#"><i className="glyphicon glyphicon-star"> </i></a></li>
                                    </ul>
                                    <div className="review">
                                        <a href="#"> 3 reviews </a>/
                                        <a href="#">  Write a review</a>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <label className="add-to item_price">$70.5</label>
                                <div className="available">
                                    <h6>Available Options :</h6>
                                    <ul>
                                        <li>Size:<select>
                                            <option>Large</option>
                                            <option>Medium</option>
                                            <option>small</option>
                                            <option>Large</option>
                                            <option>small</option>
                                        </select></li>
                                        <li>Cost:
                                            <select>
                                                <option>U.S.Dollar</option>
                                                <option>Euro</option>
                                            </select></li>
                                    </ul>
                                </div>
                                <a href="#" className="cart item_add">More details</a>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                        <div className="content-top1">
                            <div className="col-md-4 col-md4">
                                <div className="col-md1 simpleCart_shelfItem">
                                    <a href="single.html">
                                        <img className="img-responsive" src="images/pi6.png" alt />
                                    </a>
                                    <h3><a href="single.html">Trouser</a></h3>
                                    <div className="price">
                                        <h5 className="item_price">$300</h5>
                                        <a href="#" className="item_add">Add To Cart</a>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-md4">
                                <div className="col-md1 simpleCart_shelfItem">
                                    <a href="single.html">
                                        <img className="img-responsive" src="images/pi7.png" alt />
                                    </a>
                                    <h3><a href="single.html">Jeans</a></h3>
                                    <div className="price">
                                        <h5 className="item_price">$300</h5>
                                        <a href="#" className="item_add">Add To Cart</a>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-md4">
                                <div className="col-md1 simpleCart_shelfItem">
                                    <a href="single.html">
                                        <img className="img-responsive" src="images/pi.png" alt />
                                    </a>
                                    <h3><a href="single.html">Palazoo</a></h3>
                                    <div className="price">
                                        <h5 className="item_price">$300</h5>
                                        <a href="#" className="item_add">Add To Cart</a>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                    {/*-*/}
                    <div className="col-md-3 product-bottom">
                        {/*categories*/}
                        <div className=" rsidebar span_1_of_left">
                            <h3 className="cate">Categories</h3>
                            <ul className="menu-drop">
                                <li className="item1"><a href="#">Men </a>
                                    <ul className="cute">
                                        <li className="subitem1"><a href="single.html">Cute Kittens </a></li>
                                        <li className="subitem2"><a href="single.html">Strange Stuff </a></li>
                                        <li className="subitem3"><a href="single.html">Automatic Fails </a></li>
                                    </ul>
                                </li>
                                <li className="item2"><a href="#">Women </a>
                                    <ul className="cute">
                                        <li className="subitem1"><a href="single.html">Cute Kittens </a></li>
                                        <li className="subitem2"><a href="single.html">Strange Stuff </a></li>
                                        <li className="subitem3"><a href="single.html">Automatic Fails </a></li>
                                    </ul>
                                </li>
                                <li className="item3"><a href="#">Kids</a>
                                    <ul className="cute">
                                        <li className="subitem1"><a href="single.html">Cute Kittens </a></li>
                                        <li className="subitem2"><a href="single.html">Strange Stuff </a></li>
                                        <li className="subitem3"><a href="single.html">Automatic Fails</a></li>
                                    </ul>
                                </li>
                                <li className="item4"><a href="#">Accesories</a>
                                    <ul className="cute">
                                        <li className="subitem1"><a href="single.html">Cute Kittens </a></li>
                                        <li className="subitem2"><a href="single.html">Strange Stuff </a></li>
                                        <li className="subitem3"><a href="single.html">Automatic Fails</a></li>
                                    </ul>
                                </li>
                                <li className="item4"><a href="#">Shoes</a>
                                    <ul className="cute">
                                        <li className="subitem1"><a href="single.html">Cute Kittens </a></li>
                                        <li className="subitem2"><a href="single.html">Strange Stuff </a></li>
                                        <li className="subitem3"><a href="single.html">Automatic Fails </a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="product-bottom">
                            <h3 className="cate">Best Sellers</h3>
                            <div className="product-go">
                                <div className=" fashion-grid">
                                    <a href="single.html"><img className="img-responsive " src="images/pr.jpg" alt /></a>
                                </div>
                                <div className=" fashion-grid1">
                                    <h6 className="best2"><a href="single.html">Lorem ipsum dolor sitamet consectetuer</a></h6>
                                    <span className=" price-in1"> $40.00</span>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="product-go">
                                <div className=" fashion-grid">
                                    <a href="single.html"><img className="img-responsive " src="images/pr1.jpg" alt /></a>
                                </div>
                                <div className=" fashion-grid1">
                                    <h6 className="best2"><a href="single.html">Lorem ipsum dolor sitamet consectetuer</a></h6>
                                    <span className=" price-in1"> $40.00</span>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="product-go">
                                <div className=" fashion-grid">
                                    <a href="single.html"><img className="img-responsive " src="images/pr2.jpg" alt /></a>
                                </div>
                                <div className=" fashion-grid1">
                                    <h6 className="best2"><a href="single.html">Lorem ipsum dolor sitamet consectetuer</a></h6>
                                    <span className=" price-in1"> $40.00</span>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="product-go">
                                <div className=" fashion-grid">
                                    <a href="single.html"><img className="img-responsive " src="images/pr3.jpg" alt /></a>
                                </div>
                                <div className=" fashion-grid1">
                                    <h6 className="best2"><a href="single.html">Lorem ipsum dolor sitamet consectetuer</a></h6>
                                    <span className=" price-in1"> $40.00</span>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        {/*//seller*/}
                        {/*tag*/}
                        <div className="tag">
                            <h3 className="cate">Tags</h3>
                            <div className="tags">
                                <ul>
                                    <li><a href="#">design</a></li>
                                    <li><a href="#">fashion</a></li>
                                    <li><a href="#">lorem</a></li>
                                    <li><a href="#">dress</a></li>
                                    <li><a href="#">fashion</a></li>
                                    <li><a href="#">dress</a></li>
                                    <li><a href="#">design</a></li>
                                    <li><a href="#">dress</a></li>
                                    <li><a href="#">design</a></li>
                                    <li><a href="#">fashion</a></li>
                                    <li><a href="#">lorem</a></li>
                                    <li><a href="#">dress</a></li>
                                    <div className="clearfix"> </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>

    )
}

export default Single_Prod