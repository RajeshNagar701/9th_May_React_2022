import React, { useReducer } from 'react'


function Reducertask() {

    function Reducer(state, action) {
        if (action.type === "CHANGENAME") {
            return { ...state, name: "Rajesh Nagar" }
        }

        if (action.type === "PLUS") {
            return { ...state, number: state.number + 1 }
        }
        if (action.type === "MINUS") {
            return { ...state, number: state.number - 1 }
        }
    }

    const initistate = {
        name: "Rajesh",
        number: 0
    }

    const [state, dispatch] = useReducer(Reducer, initistate);


    return (
        <div className='container'>

            <button onClick={() => dispatch({ type: "CHANGENAME" })}>Change name</button>
            <h1>My name is : {state.name}</h1>
            <hr />
            <button onClick={() => dispatch({ type: "PLUS" })}>+</button>
            <h1>{state.number}</h1>
            <button onClick={() => dispatch({ type: "MINUS" })}>-</button>
        </div>
    )
}

export default Reducertask