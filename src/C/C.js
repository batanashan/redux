import React from 'react'
import { connect } from 'react-redux'
let C = (props) => {
  return (
    <div>
       <p>NAME:.....{props.name}</p> 
       <p>LOC:.....{props.loc}</p> 

    </div>
  )
}
C = connect(
(state)=>{
  const {name,loc} = state?.appReducer
return {
name,
loc
}
}
)(C)
export default C