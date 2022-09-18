import React, { useState, useEffect } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import swal from 'sweetalert';
function Manage_Product() {


    useEffect(() => {
        fetchAll();
    }, []);

    const [alldata, Setalldata] = useState([]);
    function fetchAll() {
        fetch(`https://komalreact-default-rtdb.firebaseio.com/products.json`)
            .then((response) => response.json())
            .then((data) => {
                Setalldata(data);
                console.log(data);
            });
    }
    function HandelDelete(id) {
        const ans = window.confirm('Are you sure want to Delete !');
        if (ans === true) {
            fetch(`https://komalreact-default-rtdb.firebaseio.com/products/${id}.json`, {
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

    const navigate=useNavigate();

   

    return (
        <div id="page-wrapper" className="gray-bg dashbard-1">
            <div className="content-main">
                {/*banner*/}
                <div className="banner">
                    <h2>
                        <Link to="/dashboard">Home</Link>
                        <i className="fa fa-angle-right" />
                        <span>Manage Categories</span>
                    </h2>
                </div>
                {/*//banner*/}
                {/*faq*/}
                <div className="blank">
                    <div className="blank-page">
                        <div className="container mt-3">
                            <h2>Manage Categories</h2>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                        <th>status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Object.keys(alldata).map((item, index) => {
                                            const { name, img } = alldata[item];
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{name}</td>
                                                    <td><img src={img} alt="" width="30px" /></td>
                                                    <td><button className='btn btn-danger'  onClick={() =>  { navigate(`/edit_product/${item}`) }}>Edit</button></td>
                                                    <td><button className='btn btn-danger' onClick={() => {HandelDelete(item)}}>Delete</button></td>
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


           


        </div>

    )
}

export default Manage_Product