/* eslint-disable prettier/prettier */
import { Request, Response } from "express"

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase"

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params

    const user = this.showUserProfileUseCase.execute({ user_id })

    if (!user) {
      return response.status(400).json({ error: "user not found!" })
    }

    return response.json(user)
  }
}

export { ShowUserProfileController }
