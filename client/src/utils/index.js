const makePair = (name, value) => ({
  name,
  value
})

export const DEPARTMENTS = [
  makePair('Computer Science', 'CSCI'),
  makePair('Applied Math', 'APMA')
];

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