import axios from 'axios';

export async function viewProducts() {
    const res = await axios.get(`http://localhost:8000/api/student`);
    return{
        type:'VIEW_USER',
        payload:res.data
    }
}

export const adduser=(data)=>{
    return{
        type:'ADD_USER',
        payload:data
    }
}

export const deleteuser=(id)=>{
    return{
        type:'DELETE_USER',
        payload:id
    }
}

export const edituser=(id)=>{
    return{
        type:'EDIT_USER',
        payload:id
    }
}

export const updateuser=(data)=>{
    return{
        type:'UPDATE_USER',
        payload:data
    }
}