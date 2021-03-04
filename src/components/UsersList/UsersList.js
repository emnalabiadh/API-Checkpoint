//import React from "react";
//import UsersCard from "../UsresCard/UsersCard";
//import { useEffect, useState } from "react";
//import axios from "axios";
//const UsersList = () => {
// const [users, setUsers] = useState([]);
//useEffect(() => {
// const url = "https://jsonplaceholder.typicode.com/users";
//axios.get(url)
//.then((response) => setUsers(response.data));
//}, []);

//return (
//<div className="Users-List">
//  {users.map((user) => (
//   <UsersCard user={user} key={user.id} />
//))}
//</div>
//);
//};
//export default UsersList;

import React, { useEffect, useState } from "react";

import axios from "axios";

import UsersCard from "../UsresCard/UsersCard";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data));
  }, []);

  const style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };
  return (
    <div style={style}>
      {users.map((user) => (
        <UsersCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
