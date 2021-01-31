import { Request, Response } from 'express'
import { Handler } from '../../core/handler'
import { PARAMETER_INVALID } from '../../constants/error'
import { User } from '../../models/index'

type Params = {
  user_id: number
}

type Data = {
  id: number
  name: string
  age: number
}

export class GetUserById {
  handler: Handler
  params: Params

  constructor(req: Request, res: Response) {
    this.handler = new Handler(req, res)

    this.params = {
      user_id: Number(req.params.user_id),
    }
  }

  /**
   * メイン処理
   */
  async main() {
    if (!this.params.user_id) {
      return this.handler.error(PARAMETER_INVALID)
    }

    const data = await this.getUser()

    if (!data) {
      return this.handler.error(PARAMETER_INVALID)
    }

    return this.handler.json<Data>(data)
  }

  getUser() {
    return User.findOne({
      attributes: ['id', 'name', 'age'],
      where: {
        id: this.params.user_id,
      },
    })
  }
}
