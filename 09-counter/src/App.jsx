import React, {useState} from 'react'


const App = () => {

const [count, setCount]=useState(99);

const increase=()=>{
  
    setCount(count+1);
  
}
const decrease=()=>{
  if(count>0){
    setCount(count-1);
  }
}

  return (
    <div>
      <h1>Count: {count} </h1>
   
       {count <100 && (<button onClick={increase}>Increment</button>)}

      <button onClick={decrease}>Decrement</button>
      
    </div>
  )
}

export default App
