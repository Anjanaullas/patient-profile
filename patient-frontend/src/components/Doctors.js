import React, { useEffect, useState } from 'react';
import { getDoctors, createDoctor } from '../api';

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({ name:'', specialization:'' });

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    const res = await getDoctors();
    setDoctors(res.data);
  };

  const submit = async (e) => {
    e.preventDefault();
    await createDoctor(form);
    fetchDoctors();
  };

  return (
    <>
      <h2>Add Doctor</h2>
      <form onSubmit={submit}>
        <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})} />
        <input placeholder="Specialization" onChange={e => setForm({...form, specialization:e.target.value})} />
        <button>Add</button>
      </form>

      <ul>
        {doctors.map(d => (
          <li key={d.id}>{d.name} - {d.specialization}</li>
        ))}
      </ul>
    </>
  );
}

export default Doctors;
