import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UsersList from "./components/UsersList/UsersList";
import UsersForm from "./components/UsersForm/UsersForm";

function App() {
  const [users, setUsers] = useState([]);
  /* Se crea un estado para recibir el usuario a modificar */
  const [userSelected, setUserSelected] = useState(null);
  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const selectUser = (user) => setUserSelected(user);

  const deselectUser = () => {
    setUserSelected(null);
  };
  const removeUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  };
  return (
    <div className="App container mt-5">
      <UsersForm
        getUsers={getUsers}
        userSelected={userSelected}
        deselectUser={deselectUser}
      />
      <UsersList
        users={users}
        selectUser={selectUser}
        removeUser={removeUser}
      />
    </div>
  );
}

export default App;
