'use client'
import React ,{useState}from 'react'
import { appStore } from '@/store/appStore';
const B = () => {
const [loc,setLoc] = useState();
const fnClick=()=>{
appStore.dispatch({
  type:'LOC_UPDATE',
  payload:loc
})
}

  return (
    <div>B:
     <p> Loc: < input  onChange={eve=>setLoc(eve.target.value)}/></p>
     <button onClick={fnClick}>click</button>
    </div>
  )
}

export default B;