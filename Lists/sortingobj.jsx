import React from 'react';

const Sortobj = () => {
  const users = [
    { name: "John Doe", age: 30, location: "New York" },
    { name: "Jane Smith", age: 25, location: "Los Angeles" },
    { name: "Mike Johnson", age: 40, location: "Chicago" },
  ];

  return (
    <div>
      <h2>User Information</h2>
      {users.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Location: {user.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Sortobj;z