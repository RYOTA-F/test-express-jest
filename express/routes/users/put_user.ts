import { Request, Response } from 'express'
import { Handler } from '../../core/handler'
import { PARAMETER_INVALID, NO_DATA_EXISTS } from '../../constants/error'
import { User } from '../../models/index'

type Params = {
  user_id: number
}

type Body = {
  name: string
  age: number
}

export class PutUser {
  handler: Handler
  params: Params
  body: Body

  constructor(req: Request, res: Response) {
    this.handler = new Handler(req, res)
    this.params = {
      user_id: Number(req.params.user_id),
    }
    this.body = {
      ...req.body,
    }
  }

  /**
   * メイン処理
   */
  async main() {
    if (!Number(this.params.user_id) || !Object.keys(this.body).length) {
      return this.handler.error(PARAMETER_INVALID)
    }

    const data = await this.getUser()

    if (!data) {
      return this.handler.error(NO_DATA_EXISTS)
    }

    this.updateUser()

    return this.handler.json(true)
  }

  /**
   * ユーザー情報を取得
   */
  getUser() {
    return User.findOne({
      attributes: ['id'],
      where: {
        id: this.params.user_id,
      },
    })
  }

  /**
   * ユーザー情報を更新
   */
  updateUser() {
    const values = {
      name: this.body.name,
      age: this.body.age,
    }

    return User.update(values, {
      where: {
        id: this.params.user_id,
      },
    })
  }
}
