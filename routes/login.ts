import { Request, Response, Application } from 'express'
import { v4 as uuid } from 'uuid'

const env = {
    apiURL: process.env.SPOTIFY_API_URL || '',
    authURL: process.env.SPOTIFY_AUTH_URL || '',
    clientID: process.env.SPOTIFY_CLIENT_ID || '',
    secretID: process.env.SPOTIFY_SECRET_ID || '',
    redirectURI: process.env.REDIRECT_URI || '',
    authScope: [
        'user-follow-modify',
        'user-follow-read',
        'user-read-private',
        'user-read-email'
    ]
}

module.exports = function(app: Application) {
    // Get login link through spotify auth API - move this to frontend-app
    app.get('/login', (req: Request, res: Response) => {
        const generateState = uuid()

        const params = new URLSearchParams({
            method: 'GET',
            response_type: 'code',
            client_id: env.clientID,
            scope: env.authScope.join(' '),
            redirect_uri: env.redirectURI,
            state: generateState
        })

        res.redirect(`${env.authURL}/authorize?${params.toString()}`)
    })
}
