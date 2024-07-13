import express from 'express';
import router from './routes/index.js';

const app = express();
const port = 3000;

app.use('/api', router);

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
