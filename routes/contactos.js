import express from 'express';
import { Contacto } from '../models/consultas.js';
import { Op } from 'sequelize';

const router = express.Router();

/*GET /contactos*/
router.get('/', async (req, res, next) => {
  try {
    const contactos = await Contacto.findAll({
      order: [['fecha', 'DESC']]
    });
    res.json(contactos);
  } catch (err) {
    next(err);
  }
});

/*post /contactos*/
router.post('/', async (req, res, next) => {
  try {
    const { nombre, email, mensaje } = req.body;

    // Validar campos vacíos
    if (!nombre || !email || !mensaje) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    //Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'El formato del email es inválido.' });
    }

    //Crear nuevo contacto en la base de datos
    const nuevo = await Contacto.create({ nombre, email, mensaje });

    res.status(201).json({
      message: 'Contacto registrado correctamente.',
      data: nuevo
    });
  } catch (err) {
    next(err);
  }
});

export default router;
