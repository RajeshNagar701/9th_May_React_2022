import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import swal from 'sweetalert';
function Manage_customer() {

    useEffect(()=>{
        fetchAll();
    },[]);

    const [alldata,Setalldata]=useState([]);
    function fetchAll(){
        fetch(`https://komalreact-default-rtdb.firebaseio.com/customers.json`)
        .then((response) => response.json())
        .then((data) => {
            Setalldata(data);
            console.log(data);
        
        });
    }

    function HandelDelete(id)
    {
        const ans=window.confirm('Are you sure want to Delete !');
        if(ans === true)
        {
            fetch(`https://komalreact-default-rtdb.firebaseio.com/customers/${id}.json`, {
            method: 'DELETE'
             })
            .then((response) => response.json())
            .then((data) => {
                fetchAll();
                swal({
                    title: "Success",
                    text: "Delete Success!",
                    icon: "success",
                    button: "Success",
                  });
            });
        }
      
    }

    function HandelStatus(item)
    {
        fetch(`https://komalreact-default-rtdb.firebaseio.com/customers/${item}.json`)
        .then((response) => response.json())
        .then((data) => {
            if(data.status==="Unblock")
            {
                fetch(`https://komalreact-default-rtdb.firebaseio.com/customers/${item}.json`, {
                    method: 'PATCH',
                    body: JSON.stringify({status:"Block"}),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => {
                        //console.log(json);
                        swal("Success", "Block Success", "success");
                        fetchAll();
                    });
            }
            else
            {
                fetch(`https://komalreact-default-rtdb.firebaseio.com/customers/${item}.json`, {
                    method: 'PATCH',
                    body: JSON.stringify({status:"Unblock"}),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then((response) => response.json())
                    .then((json) => {
                        //console.log(json);
                        swal("Success", "Unblock Success", "success");
                        fetchAll();
                    });
            }
        
        });
    }



    return (
        <div id="page-wrapper" className="gray-bg dashbard-1">
            <div className="content-main">
                {/*banner*/}
                <div className="banner">
                    <h2>
                        <Link to="/dashboard">Home</Link>
                        <i className="fa fa-angle-right" />
                        <span>Manage Customer</span>
                    </h2>
                </div>
                {/*//banner*/}
                {/*faq*/}
                <div className="blank">
                    <div className="blank-page">
                        <div className="container mt-3">
                            <h2>Manage Customer</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                        Object.keys(alldata).map((item,index)=>{
                                               const {firstname,lastname,email,password,status}=alldata[item]; 
                                            return(
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{firstname}</td>
                                                <td>{lastname}</td>
                                                <td>{email}</td>
                                                <td>{password}</td>
                                                <td><button className='btn btn-primary' onClick={()=>{HandelStatus(item)}}>{status}</button></td>
                                                <td><button className='btn btn-danger' onClick={()=>{HandelDelete(item)}}>Delete</button></td>
                                            </tr>
                                            )

                                        })
                                    }
                                  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div></div>

    )
}

export default Manage_customer