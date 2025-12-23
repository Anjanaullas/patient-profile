import React, { useEffect, useState } from 'react';
import { getDoctors, searchDoctors } from '../api';

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    const { data } = await getDoctors();
    setDoctors(data);
  };

  const handleSearch = async () => {
    const { data } = await searchDoctors(search);
    setDoctors(data);
  };

  return (
    <div>
      <h2>Available Doctors</h2>
      <input 
        type="text" 
        placeholder="Search doctor" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {doctors.map(doc => (
          <li key={doc.id}>{doc.name} - {doc.specialization}</li>
        ))}
      </ul>
    </div>
  );
}

export default Doctors;
