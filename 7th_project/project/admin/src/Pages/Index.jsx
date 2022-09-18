import React from 'react'

function Index() {
  return (
    <div>
      <div className="login">
        <h1><a href="index.html">Minimal </a></h1>
        <div className="login-bottom">
          <h2>Login</h2>
          <form>
            <div className="col-md-6">
              <div className="login-mail">
                <input type="text" placeholder="Email" required />
                <i className="fa fa-envelope" />
              </div>
              <div className="login-mail">
                <input type="password" placeholder="Password" required />
                <i className="fa fa-lock" />
              </div>
              <a className="news-letter " href="#">
                <label className="checkbox1"><input type="checkbox" name="checkbox" /><i> </i>Forget Password</label>
              </a>
            </div>
            <div className="col-md-6 login-do">
              <label className="hvr-shutter-in-horizontal login-sub">
                <input type="submit" defaultValue="login" />
              </label>
              <p>Do not have an account?</p>
              <a href="signup.html" className="hvr-shutter-in-horizontal">Signup</a>
            </div>
            <div className="clearfix"> </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Index