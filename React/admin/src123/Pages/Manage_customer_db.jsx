import Navbar from '../Component/Navbar'
import React,{useState,useEffect} from 'react'
import swal from 'sweetalert';

function Manage_customer_db() {

    useEffect(()=>{
        fetchdata();
    },[]);

    const[alldata,setalldata]=useState([]);
    function fetchdata(){
        fetch(`https://nazisadmin-default-rtdb.firebaseio.com/customer.json`)
        .then((response) => response.json())
        .then((data) => {
            
            setalldata(data);

        });
       
    }

    function deletedata(deleteid)
    {   
        fetch(`https://nazisadmin-default-rtdb.firebaseio.com/customer/${deleteid}.json`, {
            method: 'DELETE',
          })
          .then((response) => response.json())
          .then((json) => {

            swal({
                title: "Success!",
                text: "Customer Delete Success!",
                icon: "success",
                button: "Aww yiss!",
              });
              fetchdata();

          });
    }

    const[formvalue,setformvalue]=useState({
        name:"",
        username:"",
        password:"",
        mobile:"",
    }) 
    
    const [updateid,setupdateid]=useState("");
    function editdata(editid)
    {   
        
        fetch(`https://nazisadmin-default-rtdb.firebaseio.com/customer/${editid}.json`)
        .then((response) => response.json())
        .then((data) => {
            setformvalue(data);
        });
        setupdateid(editid);
    }

    function changehandel(e){

        setformvalue({...formvalue,[e.target.name]:[e.target.value]});
        console.log(formvalue);
      }
     
    function save(e)
    {   
        e.preventDefault();
        fetch(`https://nazisadmin-default-rtdb.firebaseio.com/customer/${updateid}.json`, {
        method: 'PUT',
        body: JSON.stringify(formvalue),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((data) =>{
            setformvalue({name:"",username:"",password:"",mobile:""})
            swal({
                title: "Success!",
                text: "Update Success!",
                icon: "success",
                button: "Aww yiss!",
              });
            fetchdata();  

        });
    }  


    function updatestatus(staattusid){
       
        fetch(`https://nazisadmin-default-rtdb.firebaseio.com/customer/${staattusid}.json`)
        .then((response) => response.json())
        .then((data) => {
          if(data.status === "Unblock")
          {
            fetch(`https://nazisadmin-default-rtdb.firebaseio.com/customer/${staattusid}.json`, {
            method: 'PATCH',
            body: JSON.stringify({status:"Block"}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((data) =>{
                swal({
                    title: "Success!",
                    text: "Block Success!",
                    icon: "success",
                    button: "Aww yiss!",
                  });
                fetchdata();  
            });
          }
          else
          {
            fetch(`https://nazisadmin-default-rtdb.firebaseio.com/customer/${staattusid}.json`, {
                method: 'PATCH',
                body: JSON.stringify({status:"Unblock"}),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                })
                .then((response) => response.json())
                .then((data) =>{
                    swal({
                        title: "Success!",
                        text: "Unblock Success!",
                        icon: "success",
                        button: "Aww yiss!",
                      });
                    fetchdata();  
                });
          }
        });
    }

    return (

        <body id="page-top">
            <div id="wrapper">
                <Navbar />
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        {/* Topbar */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            {/* Sidebar Toggle (Topbar) */}
                            <form className="form-inline">
                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                    <i className="fa fa-bars" />
                                </button>
                            </form>
                            {/* Topbar Search */}
                            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {/* Topbar Navbar */}
                            <ul className="navbar-nav ml-auto">
                                {/* Nav Item - Search Dropdown (Visible Only XS) */}
                                <li className="nav-item dropdown no-arrow d-sm-none">
                                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-search fa-fw" />
                                    </a>
                                    {/* Dropdown - Messages */}
                                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                                        <form className="form-inline mr-auto w-100 navbar-search">
                                            <div className="input-group">
                                                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fas fa-search fa-sm" />
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                                {/* Nav Item - Alerts */}
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-bell fa-fw" />
                                        {/* Counter - Alerts */}
                                        <span className="badge badge-danger badge-counter">3+</span>
                                    </a>
                                    {/* Dropdown - Alerts */}
                                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                                        <h6 className="dropdown-header">
                                            Alerts Center
                                        </h6>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-primary">
                                                    <i className="fas fa-file-alt text-white" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 12, 2019</div>
                                                <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-success">
                                                    <i className="fas fa-donate text-white" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 7, 2019</div>
                                                $290.29 has been deposited into your account!
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-warning">
                                                    <i className="fas fa-exclamation-triangle text-white" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 2, 2019</div>
                                                Spending Alert: We've noticed unusually high spending for your account.
                                            </div>
                                        </a>
                                        <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                    </div>
                                </li>
                                {/* Nav Item - Messages */}
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-envelope fa-fw" />
                                        {/* Counter - Messages */}
                                        <span className="badge badge-danger badge-counter">7</span>
                                    </a>
                                    {/* Dropdown - Messages */}
                                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                                        <h6 className="dropdown-header">
                                            Message Center
                                        </h6>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="img/undraw_profile_1.svg" alt="..." />
                                                <div className="status-indicator bg-success" />
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                                    problem I've been having.</div>
                                                <div className="small text-gray-500">Emily Fowler · 58m</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="img/undraw_profile_2.svg" alt="..." />
                                                <div className="status-indicator" />
                                            </div>
                                            <div>
                                                <div className="text-truncate">I have the photos that you ordered last month, how
                                                    would you like them sent to you?</div>
                                                <div className="small text-gray-500">Jae Chun · 1d</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="img/undraw_profile_3.svg" alt="..." />
                                                <div className="status-indicator bg-warning" />
                                            </div>
                                            <div>
                                                <div className="text-truncate">Last month's report looks great, I am very happy with
                                                    the progress so far, keep up the good work!</div>
                                                <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt="..." />
                                                <div className="status-indicator bg-success" />
                                            </div>
                                            <div>
                                                <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                                    told me that people say this to all dogs, even if they aren't good...</div>
                                                <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                                    </div>
                                </li>
                                <div className="topbar-divider d-none d-sm-block" />
                                {/* Nav Item - User Information */}
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                        <img className="img-profile rounded-circle" src="img/undraw_profile.svg" />
                                    </a>
                                    {/* Dropdown - User Information */}
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                                            Profile
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                                            Settings
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                                            Activity Log
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                                            Logout
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        {/* End of Topbar */}
                        {/* Begin Page Content */}
                        <div className="container-fluid">
                            {/* Page Heading */}
                            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
                            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                                For more information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official DataTables documentation</a>.</p>
                            {/* DataTales Example */}
                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Name</th>
                                                    <th>username</th>
                                                    <th>Password</th>
                                                    <th>Mobile</th>  
                                                    <th>Action</th> 
                                                </tr>
                                            </thead>
                                           
                                            <tbody>
                                               
                                                {   
                                             Object.keys(alldata).map((item, index) => {
                                                const { name,username,password,mobile,id,status } = alldata[item];

                                                return(
                                                    <tr key={index}>
                                                        <td>{id}</td>
                                                        <td>{name}</td>
                                                        <td>{username}</td>
                                                        <td>{password}</td>
                                                        <td>{mobile}</td>
                                                        <td>
                                                            <button class="btn btn-danger m-1" onClick={()=>deletedata(item)}>Delete</button>
                                                            <button class="btn btn-primary m-1" onClick={()=>updatestatus(item)}>{status}</button>
                                                            <button class="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#myModal" onClick={()=>editdata(item)}>Edit</button>
                                                        </td>
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
                        {/* /.container-fluid */}
                    </div>


                    {/* The Modal */}
                    <div className="modal" id="myModal">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                {/* Modal Header */}
                                <div className="modal-header">
                                    <h4 className="modal-title">Modal Heading</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                </div>
                                {/* Modal body */}
                               
                                    <div className="modal-body">
                                    <form method="post">      
                                     <div className="mb-3 mt-3">
                                            <label htmlFor="Name" className="form-label">Name</label>
                                            <input type="text" className="form-control" value={formvalue.name} name="name" onChange={changehandel}  />
                                        </div>
                                        <div className="mb-3 mt-3">
                                            <label htmlFor="username" className="form-label">username</label>
                                            <input type="text" className="form-control" value={formvalue.username} name="username" onChange={changehandel}  />
                                        </div>
                                        <div className="mb-3 mt-3">
                                            <label htmlFor="password" className="form-label">password</label>
                                            <input type="password" className="form-control" value={formvalue.password} name="password" onChange={changehandel}  />
                                        </div>
                                        <div className="mb-3 mt-3">
                                            <label htmlFor="mobile" className="form-label">mobile</label>
                                            <input type="number" className="form-control" value={formvalue.mobile} name="mobile" onChange={changehandel}  />
                                        </div>
                                       
                                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={save}>Submit</button>
                                        </form>
                                    </div>   
                             
                                {/* Modal footer */}
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
   

                    {/* End of Main Content */}
                    {/* Footer */}
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright © Your Website 2020</span>
                            </div>
                        </div>
                    </footer>
                    {/* End of Footer */}
                </div>
                {/* End of Content Wrapper */}

            </div>
        </body>
    )
}

export default Manage_customer_db