// Importaciones principales
import express from 'express';
import dotenv from 'dotenv';
import contactosRouter from './routes/contactos.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';
import sequelize from './models/index.js';

// Cargar variables de entorno
dotenv.config();

// Inicializar la app
const app = express();
const PORT = process.env.PORT || 3000;

//MIDDLEWARES GLOBALES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Servir archivos estáticos
app.use(express.static('public'));

//ENDPOINTS PRINCIPALES

//Verificación de estado del servidor
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

//API de contactos
app.use('/api/contactos', contactosRouter);


//MANEJO DE ERRORES
app.use(errorHandler);


//CONEXIÓN A LA BASE DE DATOS Y SERVIDOR
async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('Conexión con la base de datos establecida correctamente.');

    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
}

startServer();
