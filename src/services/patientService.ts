import data from "../../data/patients";
import { NewPatientEntry, NonSensitivePatientEntry, PatientEntry } from "../types";
import { v1 as uuid } from 'uuid';

const id = uuid();
const patient: NonSensitivePatientEntry[] = data;

const getEntries = (): NonSensitivePatientEntry[] => {
  return patient.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};
 
const addPatient = (entry: NewPatientEntry): PatientEntry => { 
  const newPatientEntry = {
    id: id,
    ...entry
  };
  return newPatientEntry;
};

export default {
  getEntries,
  addPatient
};