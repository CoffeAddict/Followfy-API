import { Request, Response, Application } from 'express'
import errorHandler from '../utils/errorHandler'

module.exports = function(app: Application) {
    // Send non existent GET request to 404
    app.get('*', (req: Request, res: Response) => {
        errorHandler(res, 404, 'Not Found')
    })

    // Send non existent POST request to 404
    app.post('*', (req: Request, res: Response) => {
        errorHandler(res, 404, 'Not Found')
    })
};
