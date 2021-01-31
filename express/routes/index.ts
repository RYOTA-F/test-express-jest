import Express from 'express'
import tests from './tests'
import users from './users'

const router = Express.Router()

router.use('/tests', tests)
router.use('/users', users)

export default router
