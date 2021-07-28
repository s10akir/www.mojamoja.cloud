import { Router } from 'express'

const router = Router()

router.get('/age', (_, res) => {
  const birthDay = new Date(1998, 10, 2)
  const now = new Date()

  let age = now.getFullYear() - birthDay.getFullYear()

  if (
    !(
      now.getMonth() >= birthDay.getMonth() && now.getDay() >= birthDay.getDay()
    )
  )
    age--

  res.json({ birth: '1998-10-02', age })
})

export default router
