import { Request, Response, response } from 'express'
import { Handler } from '../../core/handler'
import { PARAMETER_INVALID, NO_DATA_EXISTS } from '../../constants/error'
import { User } from '../../models/index'

type Params = {
  user_id: number
}

type Data = {
  data: boolean
}

export class DeleteUser {
  handler: Handler
  params: Params

  constructor(req: any, res: any) {
    this.handler = new Handler(req, res)

    this.params = {
      user_id: Number(req.params.user_id),
    }
  }

  /**
   * メイン処理
   */
  async main() {
    try {
      if (!this.params.user_id) {
        return this.handler.error(PARAMETER_INVALID)
      }

      const data = await this.getUser()

      if (!data) {
        return this.handler.error(NO_DATA_EXISTS)
      }

      await data.destroy()

      return this.handler.json({ data: true })
    } catch (err) {
      return this.handler.error(NO_DATA_EXISTS)
    }
  }

  /**
   * 対象のユーザーを取得
   */
  getUser() {
    return User.findOne({
      attributes: ['id'],
      where: {
        id: this.params.user_id,
      },
    })
  }
}
