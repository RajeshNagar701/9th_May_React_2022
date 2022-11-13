import * as types from './Type'

const initialState={
    users:[],  // all data store 
    user:{},   // single data store / edit
    loading:true,
};

const userReducers=(state=initialState,action)=>{

    switch(action.type){
        case types.GET_USER:
            return{
                ...state,
                users: action.payload,
                loading:false
            }
       
        case types.ADD_USER:        
    	case types.DELETE_USER:
       


        case types.GET_SINGLE_USER:
            return{
                ...state,
                user:action.payload,
                loading:false,
            }        
        case types.UPDATE_USER:
            
            return{
                ...state,
                loading:false,
            }    
        default:
            return state;
    }
}

export default userReducers;