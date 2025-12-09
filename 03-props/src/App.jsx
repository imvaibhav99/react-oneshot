import React from 'react'
import Card from './components/Card';

const App = () => {
  return (
    <div className='parent'>
   <Card user="Vaibhav" age={22}/>
    <Card user="Aman" age={18}/>
    </div>
  )
}

export default App
