import axios from 'axios';



const API_URL = '/api/user';

// Registrar un usuario
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/Registrarse`, userData);
  return response.data;
};

// Iniciar sesión de usuario
export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/Acceder`, credentials);
  return response.data;
};

// Obtener perfil de usuario
export const getUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/TuArea`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// Actualizar perfil de usuario
export const updateUserProfile = async (token, userData) => {
  const response = await axios.put(`${API_URL}/TuArea`, userData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};