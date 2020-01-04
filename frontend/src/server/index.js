import express from 'express'
import next from 'next'
import path from 'path'

// Setting up next app
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
// Manage request from next
const handle = nextApp.getRequestHandler()
//
const port = parseInt(process.env.PORT, 10) || 3000
const customHost = process.env.HOST
const host = customHost || null
const prettyHost = customHost || 'localhost'

nextApp.prepare().then(() => {
    const server = express()
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