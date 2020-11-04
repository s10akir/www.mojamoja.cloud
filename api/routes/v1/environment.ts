import { Router } from 'express'
import { RemoLog } from '../../entity/RemoLog'

const router = Router()

router.get('/latest', async (_, res) => {
  const remoLog = await RemoLog.findOne({ order: { createdAt: 'DESC' } })

  res.json({
    temperature: remoLog?.temperature ?? null,
    humidity: remoLog?.humidity ?? null,
    brightness: remoLog?.brightness ?? null,
    motion: remoLog?.motion ?? null,
    created_at: remoLog?.createdAt ?? null,
    updated: remoLog?.updatedAt ?? null
  })
})

export default router
