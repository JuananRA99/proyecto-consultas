import axios from 'axios';

// Crear una instancia de Axios con la baseURL configurada
const api = axios.create({
  baseURL: 'http://localhost:8080',
});

const API_URL = '/api/users';
console.log('API URL:', API_URL);
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
  console.log('Credentials:', credentials); 
  try {
    const response = await api.post(`${API_URL}/Acceder`,credentials);
    console.log('Response:', response.data); 
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
          console.error('Error al autenticar:', error.response.data.error);
         throw new Error('Email o contraseña incorrectos');
       } else {
          console.error('Error desconocido:', error.message);
          throw error;
      }
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
// Función para obtener todas las consultas
export const getConsultas = async () => {
  try {
    const response = await api.get(`${API_URL}/consultas`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener consultas:', error);
    throw error;
  }
};

// Agrega más funciones si es necesario, por ejemplo para crear una consulta
export const createConsulta = async (consultaData) => {
  try {
    const response = await api.post(`${API_URL}/consultas`, consultaData);
    return response.data;
  } catch (error) {
    console.error('Error al crear consulta:', error);
    throw error;
  }
};

//citas de usuario
export const createAppointment = (userId, date) => api.post('/citas', { userId, date });
export const getUserAppointments = (userId) => api.get(`/user/${userId}`);


