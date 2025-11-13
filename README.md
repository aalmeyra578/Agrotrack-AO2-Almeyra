# AgroTrack-V 2.0

**Nombre:** Agustín Gabriel Almeyra Torres  
**Materia:** Programación Web II

Servidor web interno para la empresa AgroTrack. Permite registrar y listar contactos mediante una API REST con Express y MySQL. 

Este trabajo amplía la AO1 incorporando:
- Express.js para el servidor
- MySQL usando Sequelize
- API REST para contactos
- Manejo de errores y middlewares personalizados

Para ejecutar el archivo:
- se debe intalar dependencias: npm install
configurar archivo .env:
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=agrotrack
ejecutar el script schema.sql en MySQL
iniciar el servidor:
-npm start

## Ejemplo
{
  "nombre": "Agustín Almeyra",
  "email": "aalmeyra578@alumnos.iua.edu.ar",
  "mensaje": "Quisiera hacer algunas consultas de un producto"
}
