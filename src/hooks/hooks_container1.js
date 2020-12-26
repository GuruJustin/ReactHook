import React, {useState,useEffect, useReducer} from 'react';

import * as Reducer from '../store/reducers/hooks_reducer';
import * as Actions from '../store/actions/actions'
//main app 
const HooksContainer1 = () => {

  const [stateValue, setValue] = useState(0)
  const [useEffectValue, setUseEffectValue] = useState(null)


  const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState )


  const increasement = () => {
    setValue(stateValue + 1)
  }

  const decreasement = () => {
    setValue(stateValue - 1)
  }

  useEffect(() => {
    setTimeout(() => setUseEffectValue("UseEffect Worked"), 3000)
  }, [stateValue])

  const changeUseEffect = () => {
    setUseEffectValue("Some text");
  }

  const handleDispatchTrue = () => {
    // dispatch (ACTIONS, SUCCESS)
    // dispatch (type : "SUCCESS")
    console.log("frist");
    dispatch(Actions.success())
  }

  const handleDispatchFalse = () => {
    dispatch(Actions.failure())
  }


  return(
    <div>
      React Hooks
      <br />
      <button onClick= { () => increasement()}> Inc Local State Value</button>
      <button onClick= { () => decreasement()}> Dec Local State Value</button>
      <button onClick= { () => changeUseEffect()}> Change Use Effect value</button>

      <button onClick= { () => handleDispatchTrue()}> Handle Dispatch True</button>
      <button onClick= { () => handleDispatchFalse()}> Handle Dispatchc False</button>
      <br />
      {
        useEffectValue
        ? <p>{useEffectValue}</p>
        : <p>No effect value</p>
      }
      <br />
      {
        state.stateprop1 
        ? <p>State is true</p>
        : <p>State is false</p>
      }
      <br />
      Local State Valuable : {stateValue}
    </div>
  )
}


export default HooksContainer1;
