import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
function Manage_contact() {


    useEffect(() => {
        fetchAll();
    }, []);

    const [alldata, Setalldata] = useState([]);
    function fetchAll() {
        fetch(`https://komalreact-default-rtdb.firebaseio.com/contacts.json`)
            .then((response) => response.json())
            .then((data) => {
                Setalldata(data);
                console.log(data);

            });
    }

    function HandelDelete(id) {
        //console.log(id);
        const ans=window.confirm('Are you sure want to Delete !');
        if(ans === true)
        {
            fetch(`https://komalreact-default-rtdb.firebaseio.com/contacts/${id}.json`, {
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

    return (
        <div id="page-wrapper" className="gray-bg dashbard-1">
            <div className="content-main">
                {/*banner*/}
                <div className="banner">
                    <h2>
                        <Link to="/dashboard">Home</Link>
                        <i className="fa fa-angle-right" />
                        <span>Manage Contact</span>
                    </h2>
                </div>
                {/*//banner*/}
                {/*faq*/}
                <div className="blank">
                    <div className="blank-page">

                        <div className="container mt-3">
                            <h2>Manage Contact</h2>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Message</th>
                                            
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Object.keys(alldata).map((item, index) => {
                                                const { name, email, message, phonenumber } = alldata[item];
                                                return (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{name}</td>
                                                        <td>{email}</td>
                                                        <td>{phonenumber}</td>
                                                        <td>{message}</td>
                                                       
                                                        <td><button className='btn btn-danger' onClick={() => { HandelDelete(item) }}>Delete</button></td>
                                                    </tr>
                                                )

                                            })
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>

    )
}

export default Manage_contact