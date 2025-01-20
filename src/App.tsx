// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { UseThrottleHook } from './UseThrottleHook';

// function App() {
//   const [text , setText] = useState("");
//   const [renderCount , setRenderCount] = useState(0);
  
//   let throttleHook =  UseThrottleHook(500, text , setRenderCount, renderCount);
  
//   return (
//     <>
//     <input placeholder='will trigger change each time' onInput={(e)=>{
//       setText(e.target.value);
//     }} value={text}></input>
//     {renderCount}
//     Trolled : {throttleHook}
//     <div id="scrollId" style={{ "display": "block", "border": "2px solid red", "width": "100px", "height": "300px" ,"overflow" : "scroll"}}>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//       <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
//     </div>
//     </>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'

import { useThrottle } from './useThrottle'
import { useCustomThrottleHook } from './useCustomThrottleHook'

export default function App() {
  const [value, setValue] = useState('hello')
  const throttledValue = useThrottle(value)
  const throttledValue2 = useCustomThrottleHook(value , 500)

  useEffect(() => console.log(`throttledValue changed: ${throttledValue}`), [
    throttledValue,
  ])

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  return (
    <div> 
      Input: <input value={value} onChange={onChange} />
      <p>Throttled value: {throttledValue}</p>
      <p>Mine Throlled value : {throttledValue2}</p>
    </div>
  )
}
