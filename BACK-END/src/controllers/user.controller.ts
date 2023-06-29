import { Response, Request } from "express";
import userModel from "../models/user.model";
import jwt from "jsonwebtoken";

const login = async (req: Request, res: Response) => {
  try {
    let { email, password } = req.body;
    let user: any = await userModel.findOne({ email });
    if (!user) throw { status: 404, msg: "El usuario no existe" };

    if (user.password !== password)
      throw { status: 401, msg: "Constraseña incorrecta" };

    user = user.toObject();
    delete user.password;
    let secret = process.env.SECRET_KEY;
    if (!secret) throw { status: 400, msg: "No hay como encriptar el token" };
    const token = jwt.sign(user, secret);
    return res
      .status(200)
      .json({ msg: "Sesion Iniciada correctamente", token });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: error });
  }
};

const getUserInfo = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization; // Obtener el token del encabezado de autorización
      if (!token) throw { status: 401, msg: 'No se proporcionó un token de autenticación' };
  
      const secret = process.env.SECRET_KEY;
      if (!secret) throw { status: 500, msg: 'La clave secreta no está configurada' };
  
      const decoded: any = jwt.verify(token, secret); // Verificar y decodificar el token
      const userId: string = decoded._id; // Suponiendo que el campo _id contiene el ID del usuario
  
      const user = await userModel.findById(userId); // Obtener el usuario de la base de datos
  
      if (!user) throw { status: 404, msg: 'El usuario no existe' };
  
      // Devolver la información del usuario sin la contraseña
      const userInfo = {
        id: user._id,
        email: user.email,
        name: user.name,
        lastName:user.lastName,
        number: user.number,
        gener:user.gener,
        dateBirth: user.dateBirth,
        userImage: user.userImage
        // Agregar más propiedades si es necesario
      };
  
      return res.status(200).json(userInfo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  };

const getAllUsers = async (req: Request, res: Response) => {
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

    const friends = await userModel.find(
      { _id: { $in: user.friends } },
      { password: 0 }
    );
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
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const posibleFriends = await userModel.find(
      {
        _id: { $nin: [...user.friends, user_id] },
      },
      { password: 0 }
    );

    return res.status(200).json({ posibleFriends });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al obtener posibles amigos", error });
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
    return res
      .status(400)
      .json({ error, message: "Error al crear el usuario" });
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

    return res
      .status(201)
      .json({ updatedUser, message: "Amigos actualizados", action });
  } catch (error) {
    res.status(500).json({ error, message: "Error al actualizar amigos" });
  }
};


export { getAllUsers, getFriends, getPosibleFriends, createUser, editFriends,login, getUserInfo};
