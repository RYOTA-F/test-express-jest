import { Request, Response } from 'express'
import { Handler } from '../../core/handler'

export class GetTests {
  handler: Handler

  constructor(req: Request, res: Response) {
    this.handler = new Handler(req, res)
  }

  /**
   * メイン処理
   */
  async main() {
    const data = this.getTests()

    return this.handler.json(data)
  }

  /**
   * メッセージを返す
   */
  getTests() {
    const message = 'get_tests実行'

    return message
  }
}
