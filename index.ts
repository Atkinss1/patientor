import express from 'express';
import diagnoses from './src/routes/diagnoses';
import patients from './src/routes/patients';
import cors from 'cors';

const app = express();

app.use(express.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

const PORT = 3000;

app.get('/api/ping', (_req, res) => {
  console.log('Someone pinged here.');
  res.send('pong');
});
 
app.use('/api/diagnoses', diagnoses);
app.use('/api/patients', patients);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
