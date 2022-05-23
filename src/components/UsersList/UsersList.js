import React from "react";

const UsersList = ({ users, selectUser, removeUser }) => {
  return (
    <ul className="list-group">
      {users.map((user) => (
        <li key={user.id} className="list-group-item user-item">
          <p>
            <b>Email </b>
            {user.email}
          </p>
          <p>
            <b>password : </b>
            {user.password}
          </p>
          <p>
            <b>First Name : </b>
            {user.first_name}
          </p>
          <p>
            <b>Last Name: </b>
            {user.last_name}
          </p>
          <p>
            <b>Birthday : </b>
            {user.birthday}
          </p>
          <button onClick={() => selectUser(user)} className="btn btn-warning">
            Edit
          </button>
          <button
            onClick={() => removeUser(user.id)}
            className="btn btn-warning"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
