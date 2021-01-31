import { Request, Response } from 'express'
import { Handler } from '../../core/handler'
import { PARAMETER_INVALID } from '../../constants/error'
import { User } from '../../models/index'

type Data = {
  id: number
  name: string
}
export class GetUsers {
  handler: Handler

  constructor(req: Request, res: Response) {
    this.handler = new Handler(req, res)
  }

  /**
   * メイン処理
   */
  async main() {
    const data = await this.getUsers()

    if (!data) {
      return this.handler.error(PARAMETER_INVALID)
    }

    return this.handler.json<any>(data)
  }

  getUsers() {
    return User.findAll({
      attributes: ['id', 'name', 'age'],
    })
  }
}
