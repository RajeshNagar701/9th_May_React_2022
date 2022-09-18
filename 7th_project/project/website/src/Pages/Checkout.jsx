import React from 'react'

function Checkout() {
    return (
        <div>
            <div className="breadcrumbs">
                <div className="container">
                    <ol className="breadcrumb breadcrumb1 animated wow slideInLeft animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'slideInLeft' }}>
                        <li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true" />Home</a></li>
                        <li className="active">Checkout</li>
                    </ol>
                </div>
            </div>
            {/**/}
            <div className="container">
                <div className="check-out">
                    <h2>Checkout</h2>
                    <table>
                        <tbody><tr>
                            <th>Item</th>
                            <th>Qty</th>
                            <th>Prices</th>
                            <th>Delivery details</th>
                            <th>Sub total</th>
                        </tr>
                            <tr>
                                <td className="ring-in"><a href="single.html" className="at-in"><img src="images/ce.jpg" className="img-responsive" alt /></a>
                                    <div className="sed">
                                        <h5>Sed ut perspiciatis unde</h5>
                                        <p>(At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium) </p>
                                    </div>
                                    <div className="clearfix"> </div></td>
                                <td className="check"><input type="text" defaultValue={1} onfocus="this.value='';" onblur="if (this.value == '') {this.value ='';}" /></td>
                                <td>$100.00</td>
                                <td>FREE SHIPPING</td>
                                <td>$100.00</td>
                            </tr>
                            <tr>
                                <td className="ring-in"><a href="single.html" className="at-in"><img src="images/ce1.jpg" className="img-responsive" alt /></a>
                                    <div className="sed">
                                        <h5>Sed ut perspiciatis unde</h5>
                                        <p>(At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium ) </p>
                                    </div>
                                    <div className="clearfix"> </div></td>
                                <td className="check"><input type="text" defaultValue={1} onfocus="this.value='';" onblur="if (this.value == '') {this.value ='';}" /></td>
                                <td>$200.00</td>
                                <td>FREE SHIPPING</td>
                                <td>$200.00</td>
                            </tr>
                            <tr>
                                <td className="ring-in"><a href="single.html" className="at-in"><img src="images/ce2.jpg" className="img-responsive" alt /></a>
                                    <div className="sed">
                                        <h5>Sed ut perspiciatis unde</h5>
                                        <p>(At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium) </p>
                                    </div>
                                    <div className="clearfix"> </div></td>
                                <td className="check"><input type="text" defaultValue={1} onfocus="this.value='';" onblur="if (this.value == '') {this.value ='';}" /></td>
                                <td>$150.00</td>
                                <td>FREE SHIPPING</td>
                                <td>$150.00</td>
                            </tr>
                        </tbody></table>
                    <a href="#" className=" to-buy">PROCEED TO BUY</a>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>

    )
}

export default Checkout