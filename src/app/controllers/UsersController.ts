import { Request, Response } from "express";
import User from "../models/User";

export default class UsersController {
  async index(request: Request, response: Response) {
    const users = await User.findAll();

    response.json(users);
  }

  async show(request: Request, response: Response) {
    const user = await User.findByPk(request.params.id);
    response.json(user);
  }

  async store(request: Request, response: Response) {
    const user = await User.create(request.body);
    response.json(user);
  }

  async update(request: Request, response: Response) {
    const [result] = await User.update(request.body, {
      where: {
        id: request.params.id,
      },
    });

    // if (result === 0) throw new Error("Usuário não encontrado");
    response.json(result);
  }

  async destroy(request: Request, response: Response) {
    const user = await User.destroy({
      where: {
        id: request.params.id,
      },
    });
    response.json(user);
  }
}
