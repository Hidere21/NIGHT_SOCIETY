import Express from "express";
import mongoose, { modelNames } from "mongoose";
import { Request, Response } from "express";
import eventModel from "../models/event.model";

export const getEvents = async (req: Express.Request, res: Express.Response) => {
 
  try {
    const result = await eventModel.find() 
    return res.status(200).json({result})

  } catch (error) {
    console.log(error)
    return res.status(200).json({ msg: "ha ocurrido un error en el api", error });
  }
};



export const getEvent = async (req: Express.Request, res: Express.Response) => {
 
  try {

    const resultado = await eventModel.findOne([NamedNodeMap]) 
    if(resultado){
    return res.status(200).json({resultado})
    }else{
      return res.status(200).json({msg: "El evento no existe"})
    }

  } catch (error) {
    // console.log(error)
    return res.status(400).json({ msg: "Ha ocurrido un error", error });
  }
};


export const createEvent = async (req: Express.Request, res: Express.Response) => {
  
  try {

    let newEvent = req.body

    const eventCreated = await eventModel.create(newEvent)

    if(eventCreated) return res.status(201).json({ msg: "evento creado"})
    // mostar una exepcion si hay error
    throw {msg: "Error al crear el evento"}

  } catch (error) {
    console.log(error)
    return res.status(400).json({ msg: "ha ocurrido un error", error });
  }
};






export const updateEvent = async (req: Express.Request, res: Express.Response) => {
  
  try {

    let {dataToUpdate, _id} = req.body

    const updateData = await eventModel.findByIdAndUpdate(_id, dataToUpdate)

    return res.status(204).json({ msg: "Evento actualizado"})

  } catch (error) {
    console.log(error)
    return res.status(400).json({ msg: "ha ocurrido un error al actualizar", error });
  } 
};


export const uploadImageEvent = async (req: Express.Request, res: Express.Response) => {
  try {
    let {file} = req
    return res.status(201).json({ msg: "archivo guardado correctamente"})
  } catch (error) {
    console.log(error)
    return res.status(400).json({ msg: "ha ocurrido un error en el api", error });
  }

}

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
  

