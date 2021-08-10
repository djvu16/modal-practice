import React,{useState} from 'react';

import AddUser from './components/users/add-user';
import UserList from './components/users/users-list/users-list.component';

function App() {
  const [usersList,setUsersList]=useState([]);

  const addUserHandler = (uName,uAge) =>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()}];
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
