import React, {useState,useEffect} from 'react';


//main app 
const HooksContainer1 = () => {

  const [stateValue, setValue] = useState(0)
  const [useEffectValue, setUseEffectValue] = useState(null)

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


  return(
    <div>
      React Hooks
      <br />
      <button onClick= { () => increasement()}> Inc Local State Value</button>
      <button onClick= { () => decreasement()}> Dec Local State Value</button>
      <button onClick= { () => changeUseEffect()}> Change Use Effect value</button>

      <br />
      {
        useEffectValue
        ? <p>{useEffectValue}</p>
        : <p>No effect value</p>
      }
      Local State Valuable : {stateValue}
    </div>
  )
}


export default HooksContainer1;
