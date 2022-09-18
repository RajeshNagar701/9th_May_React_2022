import React,{useState} from 'react'
import swal from 'sweetalert';
function Register() {

    const [formvalue,SetForm]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
		
    })
    function changeHandel(e)
    {
        const {name,value}=e.target;
        SetForm({...formvalue, [name]:value});
        //console.log(formvalue);
    }

    function submitHandel(e) {
        e.preventDefault();

        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA0b2mLg8zCm8kBU9NejLQ485Z9bkgRxUU`, {
            method: 'POST',
            body: JSON.stringify(formvalue),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if(data.localId)
                {
                    fetch(`https://komalreact-default-rtdb.firebaseio.com/customers.json`, {
                        method: 'POST',
                        body: JSON.stringify(formvalue),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                    })
                        .then((response) => response.json())
                        .then((json) => {
                            //console.log(json);
                            swal("Success", "Register Success", "success");
                            SetForm({...formvalue,  firstname:"",lastname:"",email:"",password:""});  
                        });
                }
            })


        
    }    
    return (
        <div>
            {/*//header*/}
            <div className="breadcrumbs">
                <div className="container">
                    <ol className="breadcrumb breadcrumb1 animated wow slideInLeft animated" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'slideInLeft' }}>
                        <li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true" />Home</a></li>
                        <li className="active">Register</li>
                    </ol>
                </div>
            </div>
            <div className="container">
                <div className="register">
                    <h2>Register</h2>
                    <form action="" method="post">
                        <div className="col-md-6  register-top-grid">
                            <div className="mation">
                                <span>First Name</span>
                                <input type="text" value={formvalue.firstname} onChange={changeHandel} name="firstname" />
                                <span>Last Name</span>
                                <input type="text" value={formvalue.lastname} onChange={changeHandel} name="lastname" />
                                
                            </div>
                            <div className="clearfix"> </div>
                            <a className="news-letter" href="#">
                                <label className="checkbox"><input type="checkbox" name="checkbox" defaultChecked /><i> </i>Sign Up</label>
                            </a>
                        </div>
                        <div className=" col-md-6 register-top-grid">
                            <div className="mation">
                                <span>Email Address</span>
                                <input type="email" value={formvalue.email} onChange={changeHandel} name="email" className='form-control'/>
                                <span>Password</span>
                                <input type="password"  value={formvalue.password} onChange={changeHandel} name="password" className='form-control'/>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </form>
                    <div className="register-but">
                        <form action="" method="post">
                            <input type="submit" onClick={submitHandel} defaultValue="submit" />
                            <div className="clearfix"> </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register