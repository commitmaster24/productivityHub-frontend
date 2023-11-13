import Users from "./components/Users";
import { useState } from "react";
import User from './components/User';

const App = () => {

  const [user, setUser] = useState()

  const selectUser = (user) =>{
    setUser(user)
  }
  return (
    <div className="container mx-auto px-4">
      {user ? <User user={user} selectUser={selectUser}></User> : <Users selectUser={selectUser} />}
    </div>
  );
}

export default App;
