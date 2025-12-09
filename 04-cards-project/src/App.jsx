import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>
      <div className="card">
        <div className="top">
          <img src="https://picsum.photos/200/300" alt="Random" />
          <button>Save <Bookmark/> </button>
        </div>
        <div className="centre"></div>
        <div className="bottom"></div>

      </div>
    </div>
  )
}

export default App;
