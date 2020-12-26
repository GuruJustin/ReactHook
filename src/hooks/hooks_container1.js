import React, {useState} from 'react';


//main app 
const HooksContainer1 = () => {

  const [stateValue, setValue] = useState(0)

  const increasement = () => {
    setValue(stateValue + 1)
  }

  const decreasement = () => {
    setValue(stateValue - 1)
  }


  return(
    <div>
      React Hooks
      <br />
      <button onClick= { () => increasement()}> Inc Local State Value</button>
      <button onClick= { () => decreasement()}> Dec Local State Value</button>

      <br />
      Local State Valuable : {stateValue}
    </div>
  )
}


export default HooksContainer1;
