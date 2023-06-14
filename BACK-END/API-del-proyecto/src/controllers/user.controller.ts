import { Request, Response } from "express";
import userModel from "../models/user.model";

const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await userModel.find({}, { password: 0 });
        // validacion ternario
        return users
            ? res.status(200).json(users)
            : res.status(404).json({ message: "No se encontraro usuarios" });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

const getFriends = async (req: Request, res: Response) => {
    try {
        const { user_id } = req.params;
        const user = await userModel.findById(user_id);
        // validacion si el usuario no existe
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const friends = await userModel.find({ _id: { $in: user.friends } }, { password: 0 });
        return res.status(200).json({ friends });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};


const getPosibleFriends = async (req: Request, res: Response) => {
    try {
        const { user_id } = req.params;
        const user = await userModel.findById(user_id);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const posibleFriends = await userModel.find({
            _id: { $nin: [...user.friends, user_id] },
        }, { password: 0 });

        return res.status(200).json({ posibleFriends });
    } catch (error) {
        return res.status(500).json({ message: "Error al obtener posibles amigos", error });
    }
};


const createUser = async (req: Request, res: Response) => {
    try {
        const user = req.body;
        const created = await userModel.create(user);

        return res
            .status(201)
            .json({ created, message: "Usuario creado correctamente" });
    } catch (error) {
        return res.status(400).json({ error, message: "Error al crear el usuario" });
    }
};

const editFriends = async (req: Request, res: Response) => {
    try {
        const { friendId, action } = req.body;
        const { user_id } = req.params;

        // sacar mi usuario
        const user = await userModel.findById(user_id);

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        if (action === "delete") {
            // hacer splice del id al array para eliminar el id
            const pos = user.friends.indexOf(friendId);
            user.friends.splice(pos, 1);
        } else {
            // hacer push del id al array
            user.friends.push(friendId);
        }
        // actualizar usuario
        const updatedUser = await userModel.findByIdAndUpdate(user_id, {
            friends: user.friends,
        });

        return res.status(201).json({ updatedUser, message: "Amigos actualizados", action });
    } catch (error) {
        res.status(500).json({ error, message: "Error al actualizar amigos" });
    }
};


export { getAllUsers, getFriends, getPosibleFriends, createUser, editFriends };