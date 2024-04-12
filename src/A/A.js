import React, { useState } from 'react'
import { appStore } from '@/Store/appStore'
const A = () => {
    const [name,setName]=useState("")
    const fnClick=()=>{
        appStore.dispatch({
        type:"NAME_UPDATE",
        payload:name
        })
    }
  return (
    <div>
      <p><label>Name:</label><input onChange={eve=>setName(eve.target.value)}/></p>
      <button onClick={fnClick}>click</button>
    </div>
  )
}

export default A
