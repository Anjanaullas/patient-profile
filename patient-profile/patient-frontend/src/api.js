import axios from 'axios';

const API = axios.create({
  baseURL: 'https://anjanaanjana.pythonanywhere.com/api/',
});

export const getDoctors = () => API.get('doctors/');
export const getPatients = () => API.get('patients/');
export const createPatient = (data) => API.post('patients/', data);
export const getAppointments = () => API.get('appointments/');
export const createAppointment = (data) => API.post('appointments/', data);
