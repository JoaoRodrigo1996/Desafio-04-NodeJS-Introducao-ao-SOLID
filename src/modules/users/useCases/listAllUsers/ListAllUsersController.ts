/* eslint-disable prettier/prettier */
import { Request, Response } from "express"

import { ListAllUsersUseCase } from "./ListAllUsersUseCase"

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.headers

    const users = this.listAllUsersUseCase.execute({ user_id: String(user_id) })

    if (!users) {
      return response.status(400).json({ error: "user not found" })
    }

    return response.status(200).json(users)
  }
}

export { ListAllUsersController }
