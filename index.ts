import express from 'express';
import diagnoses from './routes/diagnoses';
const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('Someone pinged here.');
  res.send('pong');
});
 
app.use('/api/diagnoses', diagnoses);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
