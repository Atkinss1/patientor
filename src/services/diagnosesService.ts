import data from '../../data/diagnoses';
import { Diagnosis } from '../types';

const entries: Diagnosis[] = data;

const getEntries = (): Diagnosis[] => { 
  return entries;
};

export default {
  getEntries
};