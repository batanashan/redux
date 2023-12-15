'use client'
import React ,{useRef}from 'react'
import { appStore } from '@/store/appStore';
const A = () =>  {
const nameRef = useRef();
const fnClick=()=>{
  const name = nameRef.current.value;

   appStore.dispatch({
    type:'NAME_UPDATE',
    payload:name
   })

}
  return (
    <div>A:
     <p> Name: < input ref={nameRef} /></p>
     <button onClick={fnClick}>click</button>
    </div>
  )
}

export default A