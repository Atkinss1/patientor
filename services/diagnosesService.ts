import data from '../data/diagnoses';
import { Diagnosis } from '../patientorV2/src/types';

const entries: Diagnosis[] = data;

const getEntries = (): Diagnosis[] => { 
  return entries;
};

export default {
  getEntries
};