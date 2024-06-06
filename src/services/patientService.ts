import data from "../../data/patients";
import { NonSensitivePatientEntry } from "../types";

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

export default {
  getEntries
};