import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'

import { getUser,deleteUser } from '../redux/actions'

function View_user() {

    let dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getUser());
    },[]);
	
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
                        <button className='btn btn-primary m-1'>Edit</button>
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