import React, { useEffect, useState } from 'react';
import { getDoctors, getPatients, createAppointment } from '../api';

function BookAppointment() {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({ patient:'', doctor:'', date:'', opticket:'' });

  useEffect(() => {
    getDoctors().then(r => setDoctors(r.data));
    getPatients().then(r => setPatients(r.data));
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    await createAppointment(form);
    alert('Appointment booked');
  };

  return (
    <form onSubmit={submit}>
      <select onChange={e => setForm({...form, patient:e.target.value})}>
        <option>Select Patient</option>
        {patients.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
      </select>

      <select onChange={e => setForm({...form, doctor:e.target.value})}>
        <option>Select Doctor</option>
        {doctors.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
      </select>

      <input type="date" onChange={e => setForm({...form, date:e.target.value})} />
      <input placeholder="OP Ticket" onChange={e => setForm({...form, opticket:e.target.value})} />

      <button>Book</button>
    </form>
  );
}

export default BookAppointment;
