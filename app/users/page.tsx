import React from "react";

interface User {
  id: number;
  title: string;
}

const UsersPage = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
