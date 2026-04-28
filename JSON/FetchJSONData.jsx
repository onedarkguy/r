import React, { useState, useEffect } from 'react';

export default function FetchDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json.slice(0, 3)))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}