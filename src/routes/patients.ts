import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();

router.route('/')
  .get((_req, res) => {
    res.send(patientService.getEntries());
  });
   
export default router;