import express from 'express'
import path from 'path'
import webpack from 'webpack'
import config from '../webpack.config.dev'
import cors from 'cors'

/* eslint-disable no-console */

const port = 3000
const app = express()
const compiler = webpack(config)

app.use(cors())

app.use(require('webpack-dev-middleware') (compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, (err) => {
  if (err) return console.log(err)
  console.log(`Server listening on port ${port}`)
})
