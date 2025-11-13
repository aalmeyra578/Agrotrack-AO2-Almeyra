export default function errorHandler(err, req, res, next) {
  console.error('Error detectado:', err.message);
  res.status(err.status || 500).json({
    error: true,
    message: err.message || 'Error interno del servidor'
  });
}
