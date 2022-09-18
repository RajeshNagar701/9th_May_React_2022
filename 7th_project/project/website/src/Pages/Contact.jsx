import React,{useState} from 'react'
import swal from 'sweetalert';
function Contact() {


    const [formvalue,SetForm]=useState({
        name:"",
        email:"",
        phonenumber:"",
        message:""
    })
    function changeHandel(e)
    {
        const {name,value}=e.target;
        SetForm({...formvalue, [name]:value});
        //console.log(formvalue);
    }

    function submitHandel(e) {
        e.preventDefault();
        fetch(`https://komalreact-default-rtdb.firebaseio.com/contacts.json`, {
            method: 'POST',
            body: JSON.stringify(formvalue),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                //console.log(json);
                swal("Success", "Inquiry Success", "success");
                SetForm({...formvalue,  name:"",email:"",phonenumber:"",message:""});  
            });
        }


    return (
        <div>
            <div className="breadcrumbs">
                <div className="container">
                    <ol className="breadcrumb breadcrumb1 animated wow slideInLeft animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'slideInLeft' }}>
                        <li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true" />Home</a></li>
                        <li className="active">Contact</li>
                    </ol>
                </div>
            </div>
            <div className="contact">
                <div className="container">
                    <h3>Contact</h3>
                    <div className="contact-grids">
                        <div className="contact-form">
                            <form action="" method="post">
                                <div className="contact-bottom">
                                    <div className="col-md-4 in-contact">
                                        <span>Name</span>
                                        <input type="text" value={formvalue.name} onChange={changeHandel} name="name" />
                                    </div>
                                    <div className="col-md-4 in-contact">
                                        <span>Email</span>
                                        <input type="text" value={formvalue.email} onChange={changeHandel} name="email" />
                                    </div>
                                    <div className="col-md-4 in-contact">
                                        <span>Phonenumber</span>
                                        <input type="text" value={formvalue.phonenumber} onChange={changeHandel} name="phonenumber" />
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="contact-bottom-top">
                                    <span>Message</span>
                                    <textarea name="message" value={formvalue.message} onChange={changeHandel}  />
                                </div>
                                <input type="submit" onClick={submitHandel}  defaultValue="Send" />
                            </form>
                        </div>
                        <div className="address">
                            <div className=" address-more">
                                <h2>Address</h2>
                                <div className="col-md-4 address-grid">
                                    <i className="glyphicon glyphicon-map-marker" />
                                    <div className="address1">
                                        <p>Lorem ipsum dolor</p>
                                        <p>TL 19034-88974</p>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="col-md-4 address-grid ">
                                    <i className="glyphicon glyphicon-phone" />
                                    <div className="address1">
                                        <p>+885699655</p>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="col-md-4 address-grid ">
                                    <i className="glyphicon glyphicon-envelope" />
                                    <div className="address1">
                                        <p><a href="mailto:@example.com"> @example.com</a></p>
                                    </div>
                                    <div className="clearfix"> </div>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*//content*/}
            {/*map*/}
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279847.2716062404!2d145.46948275!3d-36.60289065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad4314b7e18954f%3A0x5a4efce2be829534!2sVictoria%2C+Australia!5e0!3m2!1sen!2sin!4v1443674224626" width="100%" height frameBorder={0} style={{ border: 0 }} allowFullScreen />
            </div>
            {/*//map*/}
        </div>

    )
}

export default Contact