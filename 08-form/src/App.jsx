import React,{useState} from 'react'

const App = () => {
  const[email,setEmail]=useState('');
  const[password, setPassword]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  return (
    
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label>Password</label>
           <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <button onClick={handleSubmit}>Submit</button>
      </form> 
     
  )
}
export default App
