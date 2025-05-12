//import { express } from 'express';
const express = require('express');
const { Ollama } = require('@langchain/community/llms/ollama');
const app = express()
const port = 8700
const model = new Ollama({
  bacUrl: 'http://localhost:11434',
  model: 'deepseek-r1:14b'
})

app.get('/test', async () => {
  const streams = await model.stream('you name')
  for await (const stream of streams) {
    console.log("ssss", stream)
  }
})

app.listen(port, () => {
  
})

