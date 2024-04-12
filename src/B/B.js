import { appStore } from '@/Store/appStore';
import React,{useState,useRef} from 'react'

const B = () => {
    const [age,setAge]=useState("")
    const ageRef = useRef();

    const fnChange=()=>{
        setAge(ageRef.current.value)
    }
    const fn=()=>{
      
        appStore.dispatch({
            type:"AGE_UPDATE",
            payload:age
        })
    }
 

  return (
    <div>
      <p><label>Age:</label><input ref={ageRef} type="number" onChange={fnChange}/></p>
      <button onClick={fn}>click</button>
    </div>
  )
}

export default B
