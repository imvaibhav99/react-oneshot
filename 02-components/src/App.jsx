import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
            <Navbar/>  
      <div className='card'>
        <h1>Hello, Vaibhav!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, culpa.</p>
      </div>
      <Card/>  
   
    </div>
    
  )
}

export default App
