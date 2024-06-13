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

const API_URL = '/api/user';

// Registrar un usuario
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// Iniciar sesión de usuario
export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
};

// Obtener perfil de usuario
export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Actualizar perfil de usuario
export const updateUserProfile = async (token, userData) => {
  const response = await axios.put(`${API_URL}/profile`, userData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};