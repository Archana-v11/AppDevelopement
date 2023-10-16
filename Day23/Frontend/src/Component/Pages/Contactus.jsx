import React, { useState } from 'react';
import './Contactus.css';
import Sidebar from '../Bar/Sidebar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Contactus() {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileno, setMobileNo] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const details = { firstname, lastname, email, mobileno, message };

  const formHolder = async (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !email) {
      setError('Please fill in all required fields.');
    } else {
      setError('');

      try {
        const storedToken = localStorage.getItem('token');
  
        if (!storedToken) {
          setError('Token not found in localStorage. Please log in.');
        } else {
          axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
          const response = await axios.post('http://localhost:8080/auth/postContact', details);
          console.log(response.data);
          navigate('/home');
        }
      } catch (error) {
        console.error(error);
        setError('An error occurred while submitting the form.');
      }
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="contactfull">
        <form onSubmit={formHolder}>
          <h1>Contact Us Form</h1>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            required
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            required
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            id="mobile"
            placeholder="Mobile Number"
            value={mobileno}
            onChange={(e) => setMobileNo(e.target.value)}
          />
          <h4>Type Your Message Here...</h4>
          <textarea
            type="text"
            name=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <input type="submit" value="Send" id="contact_button" />
        </form>
      </div>
    </div>
  );
}
