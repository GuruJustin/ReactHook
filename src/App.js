import React, {useState, useReducer} from 'react';
import Routes from './routes';

import Context from './utils/context'
import * as Reducer from './store/reducers/hooks_reducer'
import * as Actions from './store/actions/actions'


//main app 
const App = () => {

  const [stateGlobal, setStateGlobal] = useState(0)

  const [stateContextGlobal, dispatchContextGlobal] = useReducer(Reducer.HooksReducer, Reducer.initialState )

  const incrementGlobalState = () =>{
    setStateGlobal(stateGlobal + 1)
  }

  const decrementGlobalState = () => {
    setStateGlobal(stateGlobal - 1)
  }

  const dispatchContextGlobalTrue = () => {
    // dispatch (ACTIONS, SUCCESS)
    // dispatch (type : "SUCCESS")
    dispatchContextGlobal(Actions.success())
  }

  const dispatchContextGlobalFalse = () => {
    dispatchContextGlobal(Actions.failure())
  }
  return(
    <div>
      React
      <Context.Provider 
        value = {{
          valueGlobalState : stateGlobal,
          incrementGlobalState : () => incrementGlobalState(),
          decrementGlobalState : () => decrementGlobalState(),

          renderGlobalState : stateContextGlobal.stateprop2,
          setGlobalStateTrue : () => dispatchContextGlobalTrue(),
          setGlobalStateFalse : () => dispatchContextGlobalFalse(),
        }}
       >
        <Routes />
      </Context.Provider>
    </div>
  )
}


export default App;
