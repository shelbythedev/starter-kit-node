import express from 'express'
import path from 'path'
import compression from 'compression'
import chalk from 'chalk'
import cors from 'cors'

/* eslint-disable no-console */

const port = 3000
const app = express()

app.use(compression())
app.use( express.static('dist') )
app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(port, (err) => {
  if (err) return console.log(err)
  console.log( chalk.green(`Server listening on port ${port}`) )
})
