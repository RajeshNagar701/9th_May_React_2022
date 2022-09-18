import React from 'react'

function Validation() {
    return (

        <div id="page-wrapper" className="gray-bg dashbard-1">
            <div className="content-main">
                {/*banner*/}
                <div className="banner">
                    <h2>
                        <a href="index.html">Home</a>
                        <i className="fa fa-angle-right" />
                        <span>Validation</span>
                    </h2>
                </div>
                {/*//banner*/}
                {/*grid*/}
                <div className="validation-system">
                    <div className="validation-form">
                        {/**/}
                        <form>
                            <div className="vali-form">
                                <div className="col-md-6 form-group1">
                                    <label className="control-label">Firstname</label>
                                    <input type="text" placeholder="Firstname" required />
                                </div>
                                <div className="col-md-6 form-group1 form-last">
                                    <label className="control-label">Lastname</label>
                                    <input type="text" placeholder="Lastname" required />
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="col-md-12 form-group1 group-mail">
                                <label className="control-label">Email</label>
                                <input type="text" placeholder="Email" required />
                            </div>
                            <div className="clearfix"> </div>
                            <div className="col-md-12 form-group1 group-mail">
                                <label className="control-label">Url</label>
                                <input type="text" placeholder="Current Website Url" required />
                            </div>
                            <div className="clearfix"> </div>
                            <div className="col-md-12 form-group2 group-mail">
                                <label className="control-label">Language</label>
                                <select>
                                    <option value>English</option>
                                    <option value>Japanese</option>
                                    <option value>Russian</option>
                                    <option value>Arabic</option>
                                    <option value>Spanish</option>
                                </select>
                            </div>
                            <div className="clearfix"> </div>
                            <div className="col-md-12 form-group1 ">
                                <label className="control-label">Your Comment</label>
                                <textarea placeholder="Your Comment..." required defaultValue={"Your Comment....."} />
                            </div>
                            <div className="clearfix"> </div>
                            <div className="vali-form">
                                <div className="col-md-6 form-group1">
                                    <label className="control-label">Phone Number</label>
                                    <input type="text" placeholder="Phone Number" required />
                                </div>
                                <div className="col-md-6 form-group1 form-last">
                                    <label className="control-label">Mobile Number</label>
                                    <input type="text" placeholder="Mobile Number" required />
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="vali-form vali-form1">
                                <div className="col-md-6 form-group1">
                                    <label className="control-label">Create a password</label>
                                    <input type="password" placeholder="Create a password" required />
                                </div>
                                <div className="col-md-6 form-group1 form-last">
                                    <label className="control-label">Repeated password</label>
                                    <input type="password" placeholder="Repeated password" required />
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="col-md-12 form-group1 group-mail">
                                <label className="control-label">Number</label>
                                <input type="text" placeholder="Number" required />
                                <p className=" hint-block">Numeric values from 0-***</p>
                            </div>
                            <div className="clearfix"> </div>
                            <div className="col-md-12 form-group1 group-mail">
                                <label className="control-label ">Date</label>
                                <input type="date" className="form-control1 ng-invalid ng-invalid-required" ng-model="model.date" required />
                            </div>
                            <div className="clearfix"> </div>
                            <div className="col-md-12 form-group">
                                <div className="checkbox1">
                                    <label>
                                        <input type="checkbox" ng-model="model.winner" required className="ng-invalid ng-invalid-required" />
                                        Are you a winner?
                                    </label>
                                </div>
                            </div>
                            <div className="clearfix"> </div>
                            <div className="col-md-12 form-group2 group-mail">
                                <label className="control-label">Select</label>
                                <select>
                                    <option value>Contrary</option>
                                    <option value>Contrary1</option>
                                    <option value>Contrary2</option>
                                    <option value>Contrary3</option>
                                    <option value>Contrary4</option>
                                </select>
                            </div>
                            <div className="clearfix"> </div>
                            <div className="col-md-12 form-group">
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <button type="reset" className="btn btn-default">Reset</button>
                            </div>
                            <div className="clearfix"> </div>
                        </form>
                        {/**/}
                    </div>
                </div>
            </div></div>



    )
}

export default Validation