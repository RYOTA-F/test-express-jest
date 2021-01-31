import { Request, Response } from 'express'
import { Handler } from '../../core/handler'
import { PARAMETER_INVALID } from '../../constants/error'
import { User } from '../../models/index'

type Body = {
  name: string
  age: number
}

export class PostUser {
  handler: Handler
  body: Body

  constructor(req: Request, res: Response) {
    this.handler = new Handler(req, res)
    this.body = {
      ...req.body,
    }
  }

  /**
   * メイン処理
   */
  async main() {
    if (!this.body.name || !this.body.age) {
      return this.handler.error(PARAMETER_INVALID)
    }

    await this.createUser()

    return this.handler.json(true)
  }

  async createUser() {
    const value = {
      name: this.body.name,
      age: this.body.age,
    }

    await User.create(value)
  }
}
