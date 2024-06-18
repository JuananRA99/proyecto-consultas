const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const JWT_SECRET = 'SECRET_KEY';
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const passport = require('./config/passport'); 
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const consultaRoutes = require('./routes/consultas');
const paqueteConsultasRoutes = require('./routes/paqueteConsultas');
const pagosRoutes = require('./routes/pagos');
const googleRoutes = require('./routes/calendar');

// Configurar sesiones
app.use(session({
  secret: 'SECRET_KEY',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/api/users', userRoutes);

app.use('/api/consultas', consultaRoutes);
app.use('/api/paqueteConsultas',  paqueteConsultasRoutes);
app.use('/api/pagos', pagosRoutes);
app.use('/api/google', googleRoutes);

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,

})
  .then(() => console.log('MongoDB connectado'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el  ${PORT}`);
});