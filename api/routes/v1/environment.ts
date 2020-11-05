import axios from 'axios'

import { Router } from 'express'
import { RemoLog } from '../../entity/RemoLog'

const NATURE_TOKEN = process.env.NATURE_TOKEN || ''
const router = Router()

router.get('/latest', async (_, res) => {
  const remoLog = await RemoLog.findOne({ order: { createdAt: 'DESC' } })

  res.json({
    temperature: remoLog?.temperature ?? null,
    humidity: remoLog?.humidity ?? null,
    brightness: remoLog?.brightness ?? null,
    motion: remoLog?.motion ?? null,
    created_at: remoLog?.createdAt ?? null,
    updated: remoLog?.updatedAt ?? null,
  })
})

router.get('/fetch', (_, res) => {
  axios
    .get('https://api.nature.global/1/devices', {
      headers: {
        Authorization: `Bearer ${NATURE_TOKEN}`,
      },
    })
    .then((result) => {
      const status = result.status
      if (status === 200) {
        const remoLog = new RemoLog()

        remoLog.temperature = result.data[0].newest_events.te.val
        remoLog.humidity = result.data[0].newest_events.hu.val
        remoLog.brightness = result.data[0].newest_events.il.val
        remoLog.motion = result.data[0].newest_events.mo.val

        remoLog.save()

        res.status(status)
        res.sendStatus(status)
      }
    })
    .catch((err) => {
      res.status(503)
      res.json({ err })
    })
})

export default router
