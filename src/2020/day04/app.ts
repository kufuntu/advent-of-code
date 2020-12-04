import { readFileSync } from 'fs';

export enum PassportField {
  BIRTH_YEAR = 'byr',
  ISSUE_YEAR = 'iyr',
  EXPIRATION_YEAR = 'eyr',
  HEIGHT = 'hgt',
  HAIR_COLOR = 'hcl',
  EYE_COLOR = 'ecl',
  PASSPORT_ID = 'pid',
  COUNTRY_ID = 'cid',
}

export type PassportData = {
  [key in PassportField]?: string;
};

const file = readFileSync('./src/2020/day04/input.txt').toString();

export const splitInput = (input: string) => input.split(/^\n/gm).map(string => string.trim());

export const parseInput = (input: string[]): PassportData[] => {
  return input.map(line => {
    return line.split(/\s/g).reduce((arr, input) => {
      const cols = input.split(':');
      arr[cols[0]] = cols[1];
      return arr;
    }, {});
  })
};

export const validate = (datas: PassportData[]): number => {
  return datas.filter(data => {
    return Object.keys(data).length === 8 || Object.keys(data).length === 7 && !data.cid
  }).length;
};

export const validateStrict = (datas: PassportData[]): number => {
  return datas.filter(data => {
    const validateFields = Object.keys(data).filter(key => validateField(key as PassportField, data[key]));
    return Object.keys(data).length === Object.keys(validateFields).length && (Object.keys(data).length === 8 || Object.keys(data).length === 7 && !data.cid)
  }).length;
};

export const validateField = (key: PassportField, value: string): boolean => {
  //console.log(key);
  switch(key) {
    case PassportField.BIRTH_YEAR: {
      const num = parseInt(value);
      return num >= 1920 && num <= 2002;
    }
    case PassportField.ISSUE_YEAR: {
      const num = parseInt(value);
      return num >= 2010 && num <= 2020;
    }
    case PassportField.EXPIRATION_YEAR: {
      const num = parseInt(value);
      return num >= 2020 && num <= 2030;
    }
    case PassportField.HEIGHT: {
      const unit = value.substr(-2, 2);
      const num = parseInt(value);
      if (unit == 'cm') {
        return num >= 150 && num <= 193;
      } else {
        return num >= 59 && num <= 76;
      }
    }
    case PassportField.HAIR_COLOR: {
      return !!value.match(/^#[A-Fa-f0-9]{6,6}$/);
    }
    case PassportField.EYE_COLOR: {
      const possibilities =  [ 'amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth' ];
      return possibilities.indexOf(value) > -1;
    }
    case PassportField.PASSPORT_ID: {
      return !!value.match(/^[0-9]{9,9}$/);
    }
    case PassportField.COUNTRY_ID: {
      return true;
    }
  }

}

const split = splitInput(file);
const parse = parseInput(split);
const resultPart1 = validate(parse);
const resultPart2 = validateStrict(parse);
console.log(resultPart1, resultPart2)
