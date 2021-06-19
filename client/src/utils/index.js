const makePair = (name, value) => ({
  name,
  value
})

export const DEPARTMENTS = [
  makePair('Applied Math', 'Applied Math'),
  makePair('Computer Science', 'Computer Science'),
];


export const RATINGS = [
  makePair('0-3', [0, 3]),
  makePair('3-7', [3, 7]),
  makePair('7-10', [7, 10]),
]

export const LAB_SIZES = [
  makePair('1-5', '1-5'),
  makePair('5-10', '5-10'),
  makePair('10-15', '10-15'),
  makePair('15+', '15+')
];

export const WORKLOADS = [
  makePair('0-5', '0-5'),
  makePair('5-10', '5-10'),
  makePair('10-15', '10-15'),
  makePair('15+', '15+')
];

const isInRange = (value, range) => {
  if (range.length === 2) {
    return value >= range[0] && value <= range[1];
  } else {
    return value >= range[0];
  }
}

const createFilter = (filters) => {
  return (row) => {
    if (filters.department !== '' && !filters.department.includes(row.department)) return false;
    if (filters.rating !== '' && !isInRange(row.rating, filters.rating)) return false;
    if (filters.labSize !== '' && row.size !== filters.labSize) return false;
    if (filters.workload !== '' && row.totalHours !== filters.workload) return false;
    return true;
  }
}

export const applyFilters = (data, filters) => {
  const filter = createFilter(filters);
  return data.filter(filter);
}

export const pickHex = (color1, color2, weight) => {
  const w1 = weight;
  const w2 = 1 - w1;
  const rgb = [Math.round(color1[0] * w1 + color2[0] * w2),
  Math.round(color1[1] * w1 + color2[1] * w2),
  Math.round(color1[2] * w1 + color2[2] * w2)];
  return rgb;
}