import React, { useState, useEffect } from 'react';

export default function LocalStorage() {
  const [name, setName] = useState("");
  const [savedUser, setSavedUser] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('userDetails');
    if (storedData) {
      setSavedUser(JSON.parse(storedData));
    }
  }, []);

  const handleSave = () => {
    const userObj = { name: name, timestamp: new Date().toLocaleTimeString() };
    localStorage.setItem('userDetails', JSON.stringify(userObj));
    setSavedUser(userObj);
    setName("");
  };

  return (
    <div>
      <input type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleSave}>Save to Local Storage</button>
      
      {savedUser && (
        <p>Saved User: {savedUser.name} (Saved at {savedUser.timestamp})</p>
      )}
    </div>
  );
}