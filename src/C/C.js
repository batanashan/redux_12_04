import React from 'react'
import {connect} from 'react-redux'
let C = ({name,age}) => {
  return (
    <div>
      <h3>NAME:......{name}</h3>
      <h3>AGE:........{age}</h3>
    </div>
  )
}

C = connect((state)=>{
          const {name,age} = state.appReducer;
    return {
       name,
       age
     
    }
})(C)
export default C
