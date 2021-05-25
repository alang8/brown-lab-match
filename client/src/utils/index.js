const makePair = (name, value) => ({
  name,
  value
})

export const DEPARTMENTS = [
  makePair('Applied Math', 'APMA'),
  makePair('Computer Science', 'CSCI'),
];

const DEPARTMENTS_MAP = Object.fromEntries(DEPARTMENTS.map(({ name, value }) => [value, name]));
export const departmentValueToName = value => DEPARTMENTS_MAP[value];

export const RATINGS = [
  makePair('0-3', [0, 3]),
  makePair('3-7', [3, 7]),
  makePair('7-10', [7, 10]),
]

export const LAB_SIZES = [
  makePair('1-5', [1, 5]),
  makePair('6-10', [6, 10]),
  makePair('11-15', [11, 15]),
  makePair('16+', [16])
];

export const WORDLOADS = [
  makePair('Low', [0, 3]),
  makePair('Medium', [3, 7]),
  makePair('High', [7, 10]),
];