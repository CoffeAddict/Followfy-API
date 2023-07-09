import { Response } from 'express'

const errorHandler = (res: Response, s: number, m: string) => res.status(s).json({error: m})

export default errorHandler