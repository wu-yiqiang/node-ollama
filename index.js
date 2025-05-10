import { express } from 'express';
import { ollama } from '@langchain/community/llms/ollama'
const app = express()
const port = 8700
const model = new ollama({
  bacUrl: 'http://localhost:11434',
  model: 'deepseek-r1' 
})

app.get('/test', async () => {
  const stream = await model.stream('你是谁')

})

app.listern(port, () => {
  
})

