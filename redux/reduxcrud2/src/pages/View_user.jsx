import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { getUser,deleteUser,editUser } from '../redux/actions'

function View_user() {

    let dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getUser());
    },[]);
	
	 const [formvalue,setFormvalue]=useState({
    id:"",
    name:"",
    username:"",
    email:"",
    phone:"",
    website:""
})





const navigate=useNavigate();
function updatehandel(e){
   e.preventDefault();
   if(!formvalue.name || !formvalue.username || !formvalue.email || !formvalue.phone || !formvalue.website)
   {
      setError("All field is required");
   }
   else{
    navigate('/');
   }
    
}

const [error,setError]=useState("");

function changehandel(e){
    setFormvalue({...formvalue,[e.target.name]:e.target.value})
}

const {usersarr}=useSelector((state)=>state.userReducers)

    
  return (
      <div className="container mt-4">
          <h2>View User</h2>
         <Link to="/add_user" className='btn btn-primary float-end'>Add User</Link>
          <table className="table">
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Action</th>
                  </tr>
              </thead>
              <tbody>
                {
                   usersarr && usersarr.map((item)=>(
                    <tr key={item.id}>
                      <th>{item.id}</th>
                      <th>{item.name}</th>
                      <th>{item.username}</th>
                      <th>{item.email}</th>
                      <th>{item.phone}</th>
                      <th>
                        <button className='btn btn-danger m-1' onClick={()=> {dispatch(deleteUser(item.id))}}>Delete</button>
                        <button className='btn btn-primary m-1' onClick={()=> {dispatch(editUser(item.id,formvalue))}} data-toggle="modal" data-target="#myModal">Edit</button>
						
						
							
						  <div className="modal fade" id="myModal" role="dialog">
							<div className="modal-dialog">
							
							
							  <div className="modal-content">
								<div className="modal-header">
								  <button type="button" className="close" data-dismiss="modal">&times;</button>
								  <h4 className="modal-title">Modal Header</h4>
								</div>
								<div className="modal-body">
								  
								  
										  <h2>Edit user form</h2>
										  <form action="">
										  
										  {
											error && <h3 align="center">{error}</h3>
										  }  
											
										  <div className="mb-3 mt-3">
												  <label htmlFor="name">name:</label>
												  <input type="text" onChange={changehandel} value={formvalue.name} className="form-control" id="name" placeholder="Enter name" name="name" />
											  </div>
											  <div className="mb-3 mt-3">
												  <label htmlFor="email">username:</label>
												  <input type="text" onChange={changehandel} value={formvalue.username} className="form-control" id="username" placeholder="Enter username" name="username" />
											  </div>
											  <div className="mb-3 mt-3">
												  <label htmlFor="email">email:</label>
												  <input type="email" onChange={changehandel} value={formvalue.email} className="form-control" id="email" placeholder="Enter email" name="email" />
											  </div>
										   
											  <div className="mb-3">
												  <label htmlFor="pwd">phone:</label>
												  <input type="number" onChange={changehandel} value={formvalue.phone} className="form-control" id="phone" placeholder="Enter phone" name="phone" />
											  </div>
											  <div className="mb-3">
												  <label htmlFor="pwd">website:</label>
												  <input type="text" onChange={changehandel} value={formvalue.website} className="form-control" id="website" placeholder="Enter website" name="website" />
											  </div>
											  <button type="submit" onClick={updatehandel} className="btn btn-primary">Submit</button>
										  </form>
										
								  
								</div>
								<div className="modal-footer">
								  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
								</div>
							  </div>
							  
							</div>
						  </div>
										
						
                      </th>
                  </tr>
                    ))
                }
              </tbody>
          </table>
      </div>

  )
}

export default View_user