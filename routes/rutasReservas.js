import express from "express";

//importo el controlador de habitaciones
import { ControladorReserva  } from "../Controllers/ControladorReserva.js";
//creo un objeto de la clase controladorHabitacion
let controladorReserva = new ControladorReserva()

//Utlizo el metodo router() de express

export let rutasReservas = express.Router()

// Lista de servicios que ofrece el api

rutasReservas.get('/api2/v2/reservas', controladorReserva.buscarTodas)

rutasReservas.get('/api2/v2/reservas/:id', controladorReserva.buscarPorId)

rutasReservas.post('/api2/v2/reservas', controladorReserva.registrar)

rutasReservas.put('/api2/v2/reservas/:id', controladorReserva.editar)

rutasReservas.delete('/api2/v2/reservas/:id', controladorReserva.eliminar )