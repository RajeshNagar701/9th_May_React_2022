import * as types from './actionType'

const initialState={
    usersarr:[],
    user:{},
    loading:true
}

const userReducers=(state=initialState,action)=>{

    switch(action.type){
        case types.GET_USER:
            return{
                ...state,
                usersarr:action.payload,
                loading:false
            };
        

        case types.DELETE_USER:
            return{
                ...state,
                loading:false
            };
        
        case types.ADD_USER:
            return{
                ...state,
                loading:false
            };    
        default:
            return state;
    }
}

export default userReducers;