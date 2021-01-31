import Express from 'express'
import tests from './tests/testsController'
import users from './users/usersController'

const router = Express.Router()

router.use('/tests', tests)
router.use('/users', users)

export default router
