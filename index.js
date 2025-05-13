const express = require('express');
const bodyParser = require('body-parser')
const { Ollama } = require('@langchain/community/llms/ollama');
const app = express()
const port = 8700
app.use(bodyParser.json());
const model = new Ollama({
  bacUrl: 'http://localhost:11434',
  model: 'deepseek-r1:14b'
})

app.post('/intelligent', async (req, res) => {
  const params = req.body
  res.end("Params Is Empty")
  if (!params.text) return
  console.log("request", params.text)
  const streams = await model.stream(params.text)
  console.log("streams", streams)
  for await (const stream of streams) {
    console.log("ssss", stream)
  }
  res.end(streams)
})

app.listen(port, () => {
  console.log('start')
})

