import React, { useEffect, useState } from 'react';
import { getPatients, createPatient } from '../api';

function Patients() {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({ name: '', age: '', contact: '' });

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    const res = await getPatients();
    setPatients(res.data);
  };

  const submit = async (e) => {
    e.preventDefault();
    await createPatient(form);
    fetchPatients();
  };

  return (
    <>
      <h2>Add Patient</h2>
      <form onSubmit={submit}>
        <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})} />
        <input type="number" placeholder="Age" onChange={e => setForm({...form, age:e.target.value})} />
        <input placeholder="Contact" onChange={e => setForm({...form, contact:e.target.value})} />
        <button>Add</button>
      </form>

      <h3>Patients</h3>
      <ul>
        {patients.map(p => (
          <li key={p.id}>{p.name} - {p.age}</li>
        ))}
      </ul>
    </>
  );
}

export default Patients;
