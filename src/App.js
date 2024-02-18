// CrudComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Profile from './Profile';

function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    try {
      await axios.post('http://localhost:3000/users', formData);
      fetchData();
      setFormData({ name: '', email: '', age: '' });
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  const handleEdit = async (id) => {
    try {
      await axios.patch(`http://localhost:3000/users/${id}`, formData);
      fetchData();
      setFormData({ name: '', email: '', age: '' });
    } catch (error) {
      console.error('Error editing data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
          <Profile onAdd={handleAdd} onInputChange={handleInputChange} formData={ formData} />
          <ul>
      {data.map((item) => (
        <li key={item._id.toString()}>
          {item.name} - {item.email} - {item.age}
          <button onClick={() => handleEdit(item._id.toString())}>Edit</button>
          <button onClick={() => handleDelete(item._id.toString())}>Delete</button>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default App;
