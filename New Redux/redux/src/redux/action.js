import * as types from './Type';


import axios from 'axios'

const getUsers = (users)=>({
    type: types.GET_USER,
    payload: users,
});

export const  loadUsers = ()=>{
    return function(dispatch){
      axios.get(`http://localhost:3000/users`).then((resp)=>{
          console.log("resp", resp)
          dispatch(getUsers(resp.data));
      })
      .catch((error)=> console.log(error));
    }
  }

  
const userDeleted = ()=>({
    type: types.DELETE_USER,
  })

  
export const deleteUser = (id)=>{
    return function(dispatch){
      axios.delete(`http://localhost:3000/users/${id}`)
      .then((resp)=>{
          console.log("resp", resp)
          dispatch(userDeleted(id));
          dispatch(loadUsers());
      })
      .catch((error)=> console.log(error));
    }
  }


  const userAdded = ()=>({
    type: types.ADD_USER,
  })

  export const addUser = (user)=>{
    return function(dispatch){
      axios.post(`http://localhost:3000/users`,user)
      .then((resp)=>{
          console.log("resp", resp)
          dispatch(userAdded());
          dispatch(loadUsers());
      })
      .catch((error)=> console.log(error));
    }
  }


  
const getUser = (user)=>({
    type: types.GET_SINGLE_USER,
    payload:user,
  })

  
export const getSingleUser = (id)=>{
    return function(dispatch){
      axios.get(`http://localhost:3000/users/${id}`)
      .then((resp)=>{
          console.log("resp", resp)
          dispatch(getUser(resp.data));
          
      })
      .catch((error)=> console.log(error));
    }
  }


  const userUpdated = ()=>({
    type: types.UPDATE_USER,
  })

  
export const updateUser = (user,id)=>{
    return function(dispatch){
      axios.put(`http://localhost:3000/users/${id}`,user)
      .then((resp)=>{
          console.log("resp", resp)
          dispatch(userUpdated());
          dispatch(loadUsers());
      })
      .catch((error)=> console.log(error));
    }
  }