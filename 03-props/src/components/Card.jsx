import React from 'react'

const Card = (props) => {
  return (
    <div>
         <div className="card">
        <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="profile pic" />
      <h1>{props.user},{props.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sunt hic nemo tempora. In eveniet amet aliquam libero cupiditate dolore, rem repudiandae atque commodi blanditiis, nihil voluptatem aspernatur ipsum iste?</p>
      <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
