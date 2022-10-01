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

    const [state1, dispatch1] = useReducer(Reducer, initistate);


    return (
        <div className='container'>

            <button onClick={() => dispatch1({ type: "CHANGENAME" })}>Change name</button>
            <h1>My name is : {state1.name}</h1>
            <hr />
            <button onClick={() => dispatch1({ type: "PLUS" })}>+</button>
            <h1>{state1.number}</h1>
            <button onClick={() => dispatch1({ type: "MINUS" })}>-</button>
        </div>
    )
}

export default Reducertask