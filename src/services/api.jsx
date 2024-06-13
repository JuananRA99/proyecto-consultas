import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

const registrarse = (data) => api.post('../pages/Registrarse.jsx', data);
const acceder = (data) => api.post('../pages/Acceder.jsx', data);
const createEvent = (data) => api.post('/events', data);

const setAuthToken = (token) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const createAvailableSlot = (data) => api.post('/admin/available-slots', data);
const getAvailableSlots = () => api.get('/admin/available-slots');
const updateAvailableSlot = (id, data) => api.put(`/admin/available-slots/${id}`, data);

const getAssignedConsultations = () => api.get('/admin/assigned-consultations');

export default {
  acceder,
  registrarse,
  setAuthToken,
  createAvailableSlot,
  getAvailableSlots,
  updateAvailableSlot,
  getAssignedConsultations,
  createEvent,
};
