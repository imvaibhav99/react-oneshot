import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  const response = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/?results=10");
      const data = await res.json(); // data.results contains array of users

      setUsers(data.results); // save data in state so JSX can use it
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    response();
  },[]);
  

  return (
    <div>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.login.uuid}>
              {user.name.first} {user.name.last} ,{user.email},{user.picture.thumbnail}
            </li>
         
          );
        })}
      </ul>

      <button onClick={response}>Click</button>
    </div>
  );
};

export default App;
