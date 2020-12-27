import React, {useState, useReducer, useContext} from 'react'
import * as Actions from '../store/actions/actions'
import * as UserReducer from '../store/reducers/form_input_change'
 
const HooksForm = () => {
    const [valueSubmit, setValueSubmit] = useState('')
    const [valueChange, setValueChange] = useState('')

    const [userState, userDispatch] = useReducer(UserReducer.UserReducer, UserReducer.initialState)

    const handleuseStateChange = (event) => {
        setValueChange(event.target.value)
    }

    const handleuseStateSubmit = (event) => {
        event.preventDefault()
        setValueSubmit(event.target.useState.value)
    }


    const handleuseReducerChange = (event) => {
        userDispatch(Actions.user_input_change(event.target.value))
    }

    const handleuseReducerSubmit = (event) => {
        event.preventDefault()
        userDispatch(Actions.user_input_submit(event.target.userReducer.value))
    }

    return ( 
        <div>
            <form onSubmit = {handleuseStateSubmit}>
                <label>React useState</label>
                <input id = "useState" type = "text" onChange={handleuseStateChange}></input>
                <button type = "submit"> Submit </button>
            </form>


            
            <form onSubmit = {handleuseReducerSubmit}>
                <label>React useReducer</label>
                <input id = "userReducer" type = "text" onChange={handleuseReducerChange}></input>
                <button type = "submit"> Submit </button>
            </form>

            <div>
                <h2>React useState : </h2>
                <p>Change : {valueChange}</p>
                <p>Submit : {valueSubmit}</p>
            </div>
            <div>
                <h2>React useReducer : </h2>
                <p>Change : {userState.user_text_change}</p>
                <p>Submit : {userState.user_text_submit}</p>
            </div>
        </div>
    )
}

export default HooksForm