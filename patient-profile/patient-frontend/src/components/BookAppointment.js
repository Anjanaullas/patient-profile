import React, { useState, useEffect } from 'react';
import { getDoctors, getPatients, createAppointment } from '../api';

function BookAppointment() {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({ patient: '', doctor: '', date: '', opticket: '' });

  useEffect(() => {
    fetchDoctors();
    fetchPatients();
  }, []);

  const fetchDoctors = async () => {
    const { data } = await getDoctors();
    setDoctors(data);
  };

  const fetchPatients = async () => {
    const { data } = await getPatients();
    setPatients(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createAppointment(form);
    alert('Appointment booked successfully!');
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <select onChange={(e) => setForm({ ...form, patient: e.target.value })} required>
          <option value="">Select Patient</option>
          {patients.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
        <select onChange={(e) => setForm({ ...form, doctor: e.target.value })} required>
          <option value="">Select Doctor</option>
          {doctors.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
        </select>
        <input type="date" onChange={(e) => setForm({ ...form, date: e.target.value })} required />
        <input type="text" placeholder="OP Ticket" onChange={(e) => setForm({ ...form, opticket: e.target.value })} required />
        <button type="submit">Book</button>
      </form>
    </div>
  );
}

export default BookAppointment;
