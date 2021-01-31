import { Router } from 'express'
import { GetUsers } from './get_users'
// import { PostUser } from './users/post_user'
// import { PutUser } from './users/put_user'
// import { GetUserById } from './users/get_user_by_id'

const router = Router()

router.get('/', (req, res, next) => {
  console.log('users')
  new GetUsers(req, res).main().catch(next)
})

// router.get('/:user_id', (req, res, next) => {
//   new GetUserById(req, res).main().catch(next)
// })

// router.post('/', (req, res, next) => {
//   new PostUser(req, res).main().catch(next)
// })

// router.put('/:user_id', (req, res, next) => {
//   new PutUser(req, res).main().catch(next)
// })

export default router
