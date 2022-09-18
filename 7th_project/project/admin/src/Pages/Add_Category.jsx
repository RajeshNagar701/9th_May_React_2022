import React,{useState} from 'react'
import swal from 'sweetalert';

function Add_Category() {

    const [formvalue,SetForm]=useState({
        name:"",
        img:"",
       
    })
    function changeHandel(e)
    {
        const {name,value}=e.target;
        SetForm({...formvalue, [name]:value});
        //console.log(formvalue);
    }

    function submitHandel(e) {
        e.preventDefault();
        fetch(`https://komalreact-default-rtdb.firebaseio.com/categories.json`, {
            method: 'POST',
            body: JSON.stringify(formvalue),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                //console.log(json);
                swal("Success", "Add Success", "success");
                SetForm({...formvalue,  name:"",img:""});  
            });
        }

    return (

        <div id="page-wrapper" className="gray-bg dashbard-1">
            <div className="content-main">
                {/*banner*/}
                <div className="banner">
                    <h2>
                        <a href="index.html">Home</a>
                        <i className="fa fa-angle-right" />
                        <span>Add Categories</span>
                    </h2>
                </div>
                {/*//banner*/}
                {/*grid*/}
                <div className="validation-system">
                    <div className="validation-form">
                        {/**/}
                        <form method="post">
                            <div className="vali-form">
                                <div className="col-md-12 form-group1">
                                    <label className="control-label">Category Name</label>
                                    <input type="text" name="name" onChange={changeHandel} value={formvalue.name} placeholder="name" required />
                                </div>
                               
                                <div className="clearfix"> </div>
                            </div>
                            <div className="col-md-12 form-group1">
                                <label className="control-label">File</label>
                                <input type="text" name="img " onChange={changeHandel} value={formvalue.img} placeholder="img" required />
                            </div>
                            <div className="clearfix"> </div>
                            <br/>
                            <br/>

                            
                            <div className="clearfix"> </div>
                            <div className="col-md-12 form-group">
                                <button type="submit" onClick={submitHandel} className="btn btn-primary">Submit</button>
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

export default Add_Category