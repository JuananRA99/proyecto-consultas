import axios from 'axios';

// Crear una instancia de Axios con la baseURL configurada
const api = axios.create({
  baseURL: 'http://localhost:8080',
});

const API_URL = '/api/users';

// Registrar un usuario
export const registerUser = async (userData) => {
  try {
    const response = await api.post(`${API_URL}/Registrarse`, userData);
    return response.data;
  } catch (error) {
    console.error('Error al llamar a registerUser:', error.response || error.message);
    throw error;
  }
};

// Iniciar sesión de usuario
export const loginUser = async (credentials) => {
  try {
    const response = await api.post(`${API_URL}/Acceder`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error al llamar a loginUser:', error.response || error.message);
    throw error;
  }
};

// Obtener perfil de usuario
export const getUserProfile = async (token) => {
  try {
    const response = await api.get(`${API_URL}/TuArea`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al llamar a getUserProfile:', error.response || error.message);
    throw error;
  }
};

// Actualizar perfil de usuario
export const updateUserProfile = async (token, userData) => {
  try {
    const response = await api.put(`${API_URL}/TuArea`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al llamar a updateUserProfile:', error.response || error.message);
    throw error;
  }
};
