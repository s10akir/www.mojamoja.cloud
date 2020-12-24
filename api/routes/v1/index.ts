import { Router } from 'express'
import environmentRouter from './environment'

const router = Router()

router.use('/environment', environmentRouter)

export default router
