import React, { useState, useEffect } from 'react';

export default function UserAuthentication() {
  const usersJSON = [
    { username: "admin", password: "password123" },
    { username: "testuser", password: "mypassword" }
  ];

  const [inputUser, setInputUser] = useState("");
  const [inputPass, setInputPass] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const isValid = usersJSON.find(u => u.username === inputUser && u.password === inputPass);
    
    console.log("Login Attempt Data:", JSON.stringify({ username: inputUser, password: inputPass }));

    if (isValid) {
      setMessage("Login Successful!");
    } else {
      setMessage("Invalid Credentials.");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={inputUser} onChange={e => setInputUser(e.target.value)} required /><br/>
        <input type="password" placeholder="Password" value={inputPass} onChange={e => setInputPass(e.target.value)} required /><br/>
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}