import { Router } from 'express'
import { GetUsers } from './get_users'
import { PostUser } from './post_user'
import { PutUser } from './put_user'
import { GetUserById } from './get_user_by_id'
import { DeleteUser } from './delete_user'

const router = Router()

router.get('/', (req, res, next) => {
  new GetUsers(req, res).main().catch(next)
})

router.get('/:user_id', (req, res, next) => {
  new GetUserById(req, res).main().catch(next)
})

router.post('/', (req, res, next) => {
  new PostUser(req, res).main().catch(next)
})

router.put('/:user_id', (req, res, next) => {
  new PutUser(req, res).main().catch(next)
})

router.delete('/:user_id', (req, res, next) => {
  new DeleteUser(req, res).main().catch(next)
})

export default router
