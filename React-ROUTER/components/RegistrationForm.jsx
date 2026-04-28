import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    gender: '', 
    country: '', 
    bio: '',     
    agreement: false, 
    profilePic: null  
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Registration Successful! Check console for data.");
  };

  return (
    <div style={{ padding: '20px',  width:"100vw"}}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input type="text" name="username" onChange={handleChange} required />
        </div><br/>

        <div>
          <label>Password: </label>
          <input type="password" name="password" onChange={handleChange} required />
        </div><br/>

        <div>
          <label>Email: </label>
          <input type="email" name="email" onChange={handleChange} required />
        </div><br/>

        <div>
          <label>Gender: </label>
          <input type="radio" name="gender" value="male" onChange={handleChange} /> Male
          <input type="radio" name="gender" value="female" onChange={handleChange} /> Female
        </div><br/>

        <div>
          <label>Country: </label>
          <select name="country" onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
          </select>
        </div><br/>

        <div>
          <label>Bio: </label>
          <textarea name="bio" onChange={handleChange} rows="4"></textarea>
        </div><br/>

        <div>
          <label>Upload Profile Picture: </label>
          <input type="file" name="profilePic" onChange={handleChange} />
        </div><br/>

        <div>
          <input type="checkbox" name="agreement" onChange={handleChange} />
          <label> I agree to terms and conditions</label>
        </div><br/>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;