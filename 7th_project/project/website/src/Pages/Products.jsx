import React from 'react'

function Products() {
    return (
        <div>
            <div className="breadcrumbs">
                <div className="container">
                    <ol className="breadcrumb breadcrumb1 animated wow slideInLeft animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'slideInLeft' }}>
                        <li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true" />Home</a></li>
                        <li className="active">Products</li>
                    </ol>
                </div>
            </div>
            {/*content*/}
            <div className="products">
                <div className="container">
                    <h2>Products</h2>
                    <div className="col-md-9">
                        <div className="content-top1">
                            <div className="col-md-4 col-md4">
                                <div className="col-md1 simpleCart_shelfItem">
                                    <a href="/single">
                                        <img className="img-responsive" src="images/pi.png" alt />
                                    </a>
                                    <h3><a href="/single">Trouser</a></h3>
                                    <div className="price">
                                        <h5 className="item_price">$300</h5>
                                        <a href="#" className="item_add">Add To Cart</a>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-md4">
                                <div className="col-md1 simpleCart_shelfItem">
                                    <a href="/single">
                                        <img className="img-responsive" src="images/pi2.png" alt />
                                    </a>
                                    <h3><a href="/single">Trouser</a></h3>
                                    <div className="price">
                                        <h5 className="item_price">$300</h5>
                                        <a href="#" className="item_add">Add To Cart</a>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-md4">
                                <div className="col-md1 simpleCart_shelfItem">
                                    <a href="/single">
                                        <img className="img-responsive" src="images/pi4.png" alt />
                                    </a>
                                    <h3><a href="/single">Pant</a></h3>
                                    <div className="price">
                                        <h5 className="item_price">$300</h5>
                                        <a href="#" className="item_add">Add To Cart</a>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="content-top1">
                            <div className="col-md-4 col-md4">
                                <div className="col-md1 simpleCart_shelfItem">
                                    <a href="/single">
                                        <img className="img-responsive" src="images/pi1.png" alt />
                                    </a>
                                    <h3><a href="/single">Trouser</a></h3>
                                    <div className="price">
                                        <h5 className="item_price">$300</h5>
                                        <a href="#" className="item_add">Add To Cart</a>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-md4">
                                <div className="col-md1 simpleCart_shelfItem">
                                    <a href="/single">
                                        <img className="img-responsive" src="images/pi3.png" alt />
                                    </a>
                                    <h3><a href="/single">Palazoo</a></h3>
                                    <div className="price">
                                        <h5 className="item_price">$300</h5>
                                        <a href="#" className="item_add">Add To Cart</a>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-md4">
                                <div className="col-md1 simpleCart_shelfItem">
                                    <a href="/single">
                                        <img className="img-responsive" src="images/pi12.png" alt />
                                    </a>
                                    <h3><a href="/single">Palazoo</a></h3>
                                    <div className="price">
                                        <h5 className="item_price">$300</h5>
                                        <a href="#" className="item_add">Add To Cart</a>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                        <div className="content-top1">
                            <div className="col-md-4 col-md4">
                                <div className="col-md1 simpleCart_shelfItem">
                                    <a href="/single">
                                        <img className="img-responsive" src="images/pi9.png" alt />
                                    </a>
                                    <h3><a href="/single">Trouser</a></h3>
                                    <div className="price">
                                        <h5 className="item_price">$300</h5>
                                        <a href="#" className="item_add">Add To Cart</a>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-md4">
                                <div className="col-md1 simpleCart_shelfItem">
                                    <a href="/single">
                                        <img className="img-responsive" src="images/pi11.png" alt />
                                    </a>
                                    <h3><a href="/single">Jeans</a></h3>
                                    <div className="price">
                                        <h5 className="item_price">$300</h5>
                                        <a href="#" className="item_add">Add To Cart</a>
                                        <div className="clearfix"> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-md4">
                                <div className="col-md1 simpleCart_shelfItem">
                                    <a href="/single">
                                        <img className="img-responsive" src="images/pi10.png" alt />
                                    </a>
                                    <h3><a href="/single">Trouser</a></h3>
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
                    <div className="col-md-3 product-bottom">
                        {/*categories*/}
                        <div className=" rsidebar span_1_of_left">
                            <h3 className="cate">Categories</h3>
                            <ul className="menu-drop">
                                <li className="item1"><a href="#">Men </a>
                                    <ul className="cute">
                                        <li className="subitem1"><a href="/single">Cute Kittens </a></li>
                                        <li className="subitem2"><a href="/single">Strange Stuff </a></li>
                                        <li className="subitem3"><a href="/single">Automatic Fails </a></li>
                                    </ul>
                                </li>
                                <li className="item2"><a href="#">Women </a>
                                    <ul className="cute">
                                        <li className="subitem1"><a href="/single">Cute Kittens </a></li>
                                        <li className="subitem2"><a href="/single">Strange Stuff </a></li>
                                        <li className="subitem3"><a href="/single">Automatic Fails </a></li>
                                    </ul>
                                </li>
                                <li className="item3"><a href="#">Kids</a>
                                    <ul className="cute">
                                        <li className="subitem1"><a href="/single">Cute Kittens </a></li>
                                        <li className="subitem2"><a href="/single">Strange Stuff </a></li>
                                        <li className="subitem3"><a href="/single">Automatic Fails</a></li>
                                    </ul>
                                </li>
                                <li className="item4"><a href="#">Accessories</a>
                                    <ul className="cute">
                                        <li className="subitem1"><a href="/single">Cute Kittens </a></li>
                                        <li className="subitem2"><a href="/single">Strange Stuff </a></li>
                                        <li className="subitem3"><a href="/single">Automatic Fails</a></li>
                                    </ul>
                                </li>
                                <li className="item4"><a href="#">Shoes</a>
                                    <ul className="cute">
                                        <li className="subitem1"><a href="product.html">Cute Kittens </a></li>
                                        <li className="subitem2"><a href="product.html">Strange Stuff </a></li>
                                        <li className="subitem3"><a href="product.html">Automatic Fails </a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="product-bottom">
                            <h3 className="cate">Best Sellers</h3>
                            <div className="product-go">
                                <div className=" fashion-grid">
                                    <a href="/single"><img className="img-responsive " src="images/pr.jpg" alt /></a>
                                </div>
                                <div className=" fashion-grid1">
                                    <h6 className="best2"><a href="/single">Lorem ipsum dolor sitamet consectetuer</a></h6>
                                    <span className=" price-in1"> $40.00</span>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="product-go">
                                <div className=" fashion-grid">
                                    <a href="/single"><img className="img-responsive " src="images/pr1.jpg" alt /></a>
                                </div>
                                <div className=" fashion-grid1">
                                    <h6 className="best2"><a href="/single">Lorem ipsum dolor sitamet consectetuer</a></h6>
                                    <span className=" price-in1"> $40.00</span>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="product-go">
                                <div className=" fashion-grid">
                                    <a href="/single"><img className="img-responsive " src="images/pr2.jpg" alt /></a>
                                </div>
                                <div className=" fashion-grid1">
                                    <h6 className="best2"><a href="/single">Lorem ipsum dolor sitamet consectetuer</a></h6>
                                    <span className=" price-in1"> $40.00</span>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="product-go">
                                <div className=" fashion-grid">
                                    <a href="/single"><img className="img-responsive " src="images/pr3.jpg" alt /></a>
                                </div>
                                <div className=" fashion-grid1">
                                    <h6 className="best2"><a href="/single">Lorem ipsum dolor sitamet consectetuer</a></h6>
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
            {/*//content*/}
        </div>

    )
}

export default Products