import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

export const getDoctors = () => API.get('doctors/');
export const getPatients = () => API.get('patients/');
export const createPatient = (data) => API.post('patients/', data);
export const getAppointments = () => API.get('appointments/');
export const createAppointment = (data) => API.post('appointments/', data);
