import Express from "express";
import mongoose, { modelNames } from "mongoose";
import { Request, Response } from "express";
import eventModel from "../models/event.model";

export const getEvents = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    const result = await eventModel.find();
    return res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    return res
      .status(200)
      .json({ msg: "ha ocurrido un error en el api", error });
  }
};

export const getEvent = async (req: Express.Request, res: Express.Response) => {
  try {
    const resultado = await eventModel.findOne([NamedNodeMap]);
    if (resultado) {
      return res.status(200).json({ resultado });
    } else {
      return res.status(200).json({ msg: "El evento no existe" });
    }
  } catch (error) {
    // console.log(error)
    return res.status(400).json({ msg: "Ha ocurrido un error", error });
  }
};

export const createEvent = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    console.log(req.file);

    let newEvent = req.body;

    const eventCreated = await eventModel.create(newEvent);

    if (eventCreated) return res.status(201).json({ msg: "evento creado" });
    // mostar una exepcion si hay error
    throw { msg: "Error al crear el evento" };
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "ha ocurrido un error", error });
  }
};

export const updateEvent = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    let { dataToUpdate, _id } = req.body;

    const updateData = await eventModel.findByIdAndUpdate(_id, dataToUpdate);

    return res.status(204).json({ msg: "Evento actualizado" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ msg: "ha ocurrido un error al actualizar", error });
  }
};

export const rateEvent = async (
  req: Express.Request,
  res: Express.Response
) => {
  try {
    let { stars, _id, user_id, comment } = req.body;
    let newQualify = [];

    const event: any = await eventModel.findById(_id);
    console.log({ event });

    if (event) {
      newQualify = [...event.qualify, { stars, user_id, comment }];
      event.qualify = newQualify;
    }

    const updated = await eventModel.findByIdAndUpdate(_id, event);

    return res.status(201).json({ msg: "Evento calificado", updated });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ msg: "ha ocurrido un error al actualizar", error });
  }
};

export const like = async (req: Express.Request, res: Express.Response) => {
  try {
    let { _id, likes } = req.body;
    const updateLikes = await eventModel.findOneAndUpdate(_id, likes);
    return res.status(204).json({ msg: "Like agregado" });
  } catch (error) {}
};

// export const uploadImageAndCreateEvent = async (req: Request, res: Response) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: 'No se ha seleccionado ninguna imagen' });
//     }

//     // Crear una instancia del evento con la imagen
//     const newEvent = new Event({
//       name: req.body.name,
//       address: req.body.address,
//       date_from: req.body.date_from,
//       date_to: req.body.date_to,
//       hour: req.body.hour,
//       images: req.file.filename,
//       description: req.body.description
//     });

//     // Guardar el evento en la base de datos
//     await newEvent.save();

//     res.status(200).json({ message: 'Imagen subida y evento creado correctamente' });
//   } catch (error) {
//     console.error('Error al subir imagen y crear evento:', error);
//     res.status(500).json({ error: 'Error al subir imagen y crear evento' });
//   }
// };

// export const uploadImageEvent = async (req: Express.Request, res: Express.Response) => {
//   try {
//     let {file} = req
//     return res.status(201).json({ msg: "archivo guardado correctamente"})
//   } catch (error) {
//     console.log(error)
//     return res.status(400).json({ msg: "ha ocurrido un error en el api", error });
//   }

// }

// export const deleteEvent = async (req: Express.Request, res: Express.Response) => {
//   try {
//     let {_id} = req.params

//     const deleted = await eventModel.findByIdAndDelete(_id)
//     return res.status(200).json({ msg: "evento eliminado"})
//   } catch (error) {
//     console.log(error)
//     return res.status(400).json({ msg: "ha ocurrido un error al eliminar", error });
//   }
// }
