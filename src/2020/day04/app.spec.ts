import { parseInput, splitInput, PassportData, validate, validateStrict, validateField, PassportField } from './app';

const testData = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm

iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929

hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm

hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`;

const invalid4 = `eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946

hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007`;

const valid4 = `pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f

eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022

iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719`;

const splitTestData = [
`ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm`,

`iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929`,

`hcl:#ae17e1 iyr:2013
eyr:2024
ecl:brn pid:760753108 byr:1931
hgt:179cm`,

`hcl:#cfa07d eyr:2025 pid:166559648
iyr:2011 ecl:brn hgt:59in`
];

const parsedData: PassportData[] = [
  {
    ecl: 'gry',
    pid: '860033327',
    eyr: '2020',
    hcl: '#fffffd',
    byr: '1937',
    iyr: '2017',
    cid: '147',
    hgt: '183cm'
  },
  {
    iyr: '2013',
    ecl: 'amb',
    cid: '350',
    eyr: '2023',
    pid: '028048884',
    hcl: '#cfa07d',
    byr: '1929'
  },
  {
    hcl: '#ae17e1',
    iyr: '2013',
    eyr: '2024',
    ecl: 'brn',
    pid: '760753108',
    byr: '1931',
    hgt: '179cm'
  }, 
  {
    hcl: '#cfa07d',
    eyr: '2025',
    pid: '166559648',
    iyr: '2011',
    ecl: 'brn',
    hgt: '59in'
  }
];

describe('Main entry', () => {
  it('returns the split input for the testData', () => {
    expect(splitInput(testData)).toEqual(splitTestData);
  });
  it('returns the parsed data for the testData', () => {
    expect(parseInput(splitTestData)).toEqual(parsedData);
  });
  it('returns 2 valid passports', () => {
    expect(validate(parsedData)).toEqual(2);
  });
  it('returns 2 valid passports', () => {
    expect(validateStrict(parsedData)).toEqual(2);
  });

  it('byr valid', () => {
    expect(validateField(PassportField.BIRTH_YEAR, '2002')).toEqual(true);
  });

  it('byr invalid', () => {
    expect(validateField(PassportField.BIRTH_YEAR, '2003')).toEqual(false);
  });

  it('hgt valid', () => {
    expect(validateField(PassportField.HEIGHT, '60in')).toEqual(true);
  });
  it('hgt valid2', () => {
    expect(validateField(PassportField.HEIGHT, '190cm')).toEqual(true);
  });

  it('hgt invalid', () => {
    expect(validateField(PassportField.HEIGHT, '190in')).toEqual(false);
  });
  it('hgt invalid', () => {
    expect(validateField(PassportField.HEIGHT, '190')).toEqual(false);
  });

  it('hcl valid', () => {
    expect(validateField(PassportField.HAIR_COLOR, '#123abc')).toEqual(true);
  });
  it('hcl invalid', () => {
    expect(validateField(PassportField.HAIR_COLOR, '#123abz')).toEqual(false);
  });
  it('hcl invalid2', () => {
    expect(validateField(PassportField.HAIR_COLOR, '123abc')).toEqual(false);
  });

  it('ecl valid', () => {
    expect(validateField(PassportField.EYE_COLOR, 'brn')).toEqual(true);
  });
  it('ecl invalid', () => {
    expect(validateField(PassportField.EYE_COLOR, 'wat')).toEqual(false);
  });

  it('pid valid', () => {
    expect(validateField(PassportField.PASSPORT_ID, '000000001')).toEqual(true);
  });
  it('pid invalid', () => {
    expect(validateField(PassportField.PASSPORT_ID, '0123456789')).toEqual(false);
  });

  it('returns 4 valid passports', () => {
    expect(validateStrict(parseInput(splitInput(valid4)))).toEqual(4);
  });

  it('returns 4 invalid passports', () => {
    expect(validateStrict(parseInput(splitInput(invalid4)))).toEqual(0);
  });
});
