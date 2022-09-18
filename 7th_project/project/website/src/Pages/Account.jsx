import React,{useState} from 'react'
import swal from 'sweetalert'
import {Link, useNavigate} from 'react-router-dom'


function Account() {
    const navigate=useNavigate()
    const [formvalue,SetForm]=useState({
        email:"",
        password:""
    })
    function changeHandel(e)
    {
        const {name,value}=e.target;
        SetForm({...formvalue, [name]:value});
    }

    function submitHandel(e) {
        e.preventDefault();
        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA0b2mLg8zCm8kBU9NejLQ485Z9bkgRxUU`, {
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

                    //create session storage in pc
                    localStorage.setItem('auth_token',data.idToken);
                    localStorage.setItem('auth_email',data.email);
                    localStorage.setItem('auth_localId',data.localId);
                    
                    swal("Success", "Login Success", "success");
                    SetForm({...formvalue,email:"",password:""}); 
                    navigate('/index'); 
                }
                else
                {
                    swal("Success", "Login Failed", "error");
                    SetForm({...formvalue,email:"",password:""}); 
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
                      <li className="active">Account</li>
                  </ol>
              </div>
          </div>
          <div className="account">
              <div className="container">
                  <h2>Account</h2>
                  <div className="account_grid">
                      <div className="col-md-6 login-right">
                          <form action="" method="post">
                              <span>Email Address</span>
                              <input type="text" value={formvalue.email} onChange={changeHandel} name="email" />
                              <span>Password</span>
                              <input type="password" value={formvalue.password} onChange={changeHandel} name="password" />
                              <div className="word-in">
                                  <a className="forgot" href="#">Forgot Your Password?</a>
                                  <input type="submit" onClick={submitHandel} defaultValue="Login" />
                              </div>
                          </form>
                      </div>
                      <div className="col-md-6 login-left">
                          <h4>NEW CUSTOMERS</h4>
                          <p>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</p>
                          <Link className="acount-btn" to="/register">Create an Account</Link>
                      </div>
                      <div className="clearfix"> </div>
                  </div>
              </div>
          </div>
      </div>

  )
}

export default Account