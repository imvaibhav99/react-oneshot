import React,{useState} from 'react'

const App = () => {
  const [count,setCount]=useState(0);

  const increase=()=>{
    setCount(count+1);
  }

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={()=>{(setCount(count-1))}}>Decrement</button>
    </div>
  )
}

export default App
