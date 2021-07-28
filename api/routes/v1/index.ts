import { Router } from 'express'
import environmentRouter from './environment'
import mojaRouter from './moja'

const router = Router()

router.use('/environment', environmentRouter)
router.use('/moja', mojaRouter)

export default router
