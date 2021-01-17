import { Router } from 'express'
import { GetTests } from './get_tests'

const router = Router()

router.get('/', (req, res, next) => {
  new GetTests(req, res).main().catch(next)
})

export default router
