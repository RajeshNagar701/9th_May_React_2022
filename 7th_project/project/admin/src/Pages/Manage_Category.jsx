import React, { useState, useEffect } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import swal from 'sweetalert';
function Manage_Category() {


    useEffect(() => {
        fetchAll();
    }, []);

    const [alldata, Setalldata] = useState([]);
    function fetchAll() {
        fetch(`https://komalreact-default-rtdb.firebaseio.com/categories.json`)
            .then((response) => response.json())
            .then((data) => {
                Setalldata(data);
                console.log(data);
            });
    }
    function HandelDelete(id) {
        const ans = window.confirm('Are you sure want to Delete !');
        if (ans === true) {
            fetch(`https://komalreact-default-rtdb.firebaseio.com/categories/${id}.json`, {
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
    const [id,setid]=useState("");
    function EditHandel(item, name, img) {
        SetForm({...formvalue, name:name,img:img});
        setid(item);
    }

    const navigate=useNavigate();
    function UpdateHandel(e) {
        console.log(id);
        e.preventDefault();
        fetch(`https://komalreact-default-rtdb.firebaseio.com/categories/${id}.json`, {
            method: 'PATCH',
            body: JSON.stringify(formvalue),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                //console.log(json);
                swal("Success", "Update Success", "success");
                SetForm({...formvalue,  name:"",img:""});
                fetchAll();
                navigate('/manage_category');

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
                                                    <td><button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => { EditHandel(item, name, img) }}>Edit</button></td>
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


            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Modal Heading</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
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
                                        <br />
                                        <br />


                                        <div className="clearfix"> </div>
                                        <div className="col-md-12 form-group">
                                            <button type="submit" onClick={UpdateHandel} className="btn btn-primary"  data-bs-dismiss="modal">Save</button>
                                            
                                        </div>
                                        <div className="clearfix"> </div>
                                    </form>
                                    {/**/}
                                </div>
                            </div>


                        </div>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>




        </div>

    )
}

export default Manage_Category