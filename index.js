const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const history = require('connect-history-api-fallback')
const figlet = require('figlet')
const chalk = require('chalk')
const morgan = require('morgan')

const app = express()

app.use(bodyParser.urlencoded({ extended: false, limit: '500mb' }))
app.use(bodyParser.json({ limit: '500mb' }))
app.use(helmet())

if (process.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

const staticFileMiddleware = express.static('dist')
app.use(staticFileMiddleware)

app.use(history({
  disableDotRule: true,
  verbose: true
}))

app.use(staticFileMiddleware)

/**
 * Start Server
 **=================================**/
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  figlet('Web librería', (err, data) => {
    if (err) {
      throw err
    }

    process.stdout.write(`${chalk.yellow.bold(data)}\n`)
    process.stdout.write(`${chalk.yellow.bold('com.hanselmrojas')}\n`)
    process.stdout.write(`Running on [0.0.0.0:${PORT}]\n`)
  })
})
