import { Gender, NewPatientEntry } from "./types";

const toNewPatientEntry = (object: unknown): NewPatientEntry => { 
  
  const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
  };

  const parseName = (name: unknown): string => { 
    if (!isString(name)) {
      throw new Error('Incorrect or missing name.');
    }
    return name;
  };

  const isDateOfBirth = (DoB: string): boolean => { 
    return Boolean(Date.parse(DoB));
  };

  const parseDateOfBirth = (DoB: unknown): string => { 
    if (!isString(DoB) || !isDateOfBirth(DoB)) {
      throw new Error('Incorrect or missing date: ' + DoB);
    }
    return DoB;
  };

  const parseSsn = (ssn: unknown): string => { 
    if (!isString(ssn)) {
      throw new Error('Incorrect or missing ssn.');
    }
    return ssn;
  };

  const isGender = (param: string): param is Gender => { 
    return Object.values(Gender).map(gender => gender.toString()).includes(param);
  };

  const parseGender = (param: unknown): Gender => { 
    if (!isString(param) || !isGender(param)) {
      throw new Error('Incorrect or missing gender.');
    }
    return param;
  };

  const parseOccupation = (string: unknown): string => { 
    if (!isString(string)) {
      throw new Error('Incorrect or missing Occupation.');
    }
    return string;
  };

  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect of missing data.');
  }

  if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object) {

    const newEntry: NewPatientEntry = {
      name: parseName(object.name),
      dateOfBirth: parseDateOfBirth(object.dateOfBirth),
      ssn: parseSsn(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation)
    };

    return newEntry;
  }

  throw new Error('Incorrect data: some fields are missing!');

};

export default toNewPatientEntry;