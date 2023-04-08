import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ user, onUpdate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPassword(user.password);
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = { name, email, password };
      if (user) {
        const response = await axios.put(`/api/users/${user.id}`, data);
        onUpdate(response.data);
      } else {
        const response = await axios.post('/api/users', data);
        setName('');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.error(error);
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type='submit'>{user ? 'Update' : 'Create'}</button>
      </form>
    );
  };
};

export { UserForm };
