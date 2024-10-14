import express from 'express';
import cors from 'cors'; // Importa o pacote CORS
import router from './routes/index.js';

const app = express();
const port = 3000;

// Usar CORS para permitir requisições de diferentes origens
app.use(cors()); // Permite CORS para todas as rotas

app.use('/api', router);

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});