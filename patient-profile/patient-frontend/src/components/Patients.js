import React, { useEffect, useState } from 'react';
import { getPatients } from '../api';

function Patients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    const { data } = await getPatients();
    setPatients(data);
  };

  return (
    <div>
      <h2>Patient Profiles</h2>
      <ul>
        {patients.map(p => (
          <li key={p.id}>
            {p.name} - Age: {p.age} - Status: {p.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Patients;
