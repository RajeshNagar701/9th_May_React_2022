const userReducer=(state='',action)=>{
    switch(action.type){
		
		case "VIEW_USER":
        return{
            ...state,
            student:[...state.student,action.payload]
        }
		
        case "ADD_USER":
        return{
            ...state,
            items:[...state.items,action.payload]
        }

        case "DELETE_USER":
        return{
            ...state,
            items:state.items.filter((user)=>user.id != action.payload)
        }

        default:
            return state;
    }
}
export default userReducer;