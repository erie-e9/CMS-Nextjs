import express from 'express'
import next from 'next'
import path from 'path'
import config from '@config'

// Setting up next app
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
// Manage request from next
const handle = nextApp.getRequestHandler()
//
const port = config.serverPort
const customHost = process.env.HOST
const host = customHost || null
const prettyHost = customHost || 'localhost'

nextApp.prepare().then(() => {
    const server = express()

    // Public static
    server.use(express.static(path.join(__dirname, '../../public')))

    // Routes
    server.get('/login', (req, res) => {
      return nextApp.render(req, res, '/users/login', req.query)
    })

    server.get('/manifest.json', (req, res) => {
      return nextApp.render(req, res, '../../public/manifest.json', req.query)
    })

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, host, (err) => {
        if (err) {
          console.log(`Error running app: ${err}`)
        } else {
          console.log(`🚀 Server ready at https://${prettyHost}:${port}`)
        }
    })
})