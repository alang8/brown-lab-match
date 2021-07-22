const makePair = (name, value) => ({
  name,
  value
})

const DEPARTMENTS = [
  makePair('Africana Studies', 'AFRI'),
  makePair('American Studies', 'AMST'),
  makePair('Anthropology', 'ANTH'),
  makePair('Applied Mathematics', 'APMA'),
  makePair('Archaeology and Ancient World', 'ARCH'),
  makePair('Bio-Med (PLME)', 'PLME'),
  makePair('Biology', 'BIOL'),
  makePair('Brown Arts Institute', 'ARTS'),
  makePair('Business, Entrepreneurship, and Organization', 'BEO'),
  makePair('Center for Language Studies', ['ARAB', 'EINT', 'HNDI', 'NAHU', 'PRSN', 'SIGN', 'TKSH', 'YORU']),
  makePair('Chemistry', 'CHEM'),
  makePair('Classics', 'CLAS'),
  makePair('Cognitive, Linguistic, and Psychological Sciences', 'CLPS'),
  makePair('Cogut Center for Humanities', 'HMAN'),
  makePair('Comparative Literature', 'COLT'),
  makePair('Computer Science', 'CSCI'),
  // center for contemporary south asia
  // development studies
  // earth cultures
  makePair('Earth, Environment, and Planetary Science', 'DEEPS'),
  makePair('East Asian Studies', ['CHIN', 'EAST', 'JAPN', 'KREA']),
  makePair('Economics', 'ECON'),
  makePair('Education', 'EDUC'),
  makePair('Egyptology and Assyriology', 'ASYR'),
  makePair('Engineering', 'ENGN'),
  makePair('English', 'ENGL'),
  makePair('French Studies', 'FREN'),
  makePair('German Studies', 'GRMN'),
  makePair('Hispanic Studies', 'HISP'),
  makePair('History', 'HIST'),
  makePair('History of Art and Architecture', 'HIAA'),
  makePair('Institute at Brown for Environment and Society', 'ENVS'),
  makePair('Italian Studies', 'ITAL'),
  makePair('Judaic Studies', 'JUDS'),
  makePair('Latin American and Caribbean Study', 'LACA'),
  makePair('Literary Arts', 'LITR'),
  makePair('Mathematics', 'MATH'),
  makePair('Medieval Studies', 'MDVL'),
  makePair('Middle East Studies', 'MES'),
  makePair('Modern Culture and Media', 'MCM'),
  makePair('Music', 'MUSC'),
  makePair('Neuroscience', 'NEUR'),
  makePair('Pembroke Center for Teaching and Research', 'GNSS'),
  makePair('Philosophy', 'PHIL'),
  makePair('Physics', 'PHYS'),
  makePair('Political Science', 'POLS'),
  makePair('Portuguese and Brazilian Studies', 'POBS'),
  makePair('Public Health', 'PHP'),
  makePair('Religious Studies', ['RELS', 'COST']),
  makePair('Renaissance and Studies', 'EMOW'),
  makePair('Slavic Studies', ['CZCH', 'PLSH', 'RUSS', 'SLAV']),
  makePair('Sociology', 'SOC'),
  makePair('Theatre Arts and Performance Studies', 'TAPS'),
  makePair('Urban Studies', 'URBN'),
  makePair('Visual Art', 'VISA'),
  makePair('Watson Institute for International and Public Affairs', 'IAPA'),

  // graduate school departments
  makePair('Behavioral and Social Sciences', 'BSS'),
  makePair('Molecular Biology, Cell Biology, and Biochemistry', 'MCB'),
  makePair('Alpert Medical School', 'Alpert Medical School'),
  makePair('Psychiatry', 'Psychiatry'),
  makePair('Pediatrics', 'Pediatrics'),
  makePair('Biomedical Engineering', 'BME'),
  makePair('Ecology, Evolution, and Organismal Biology', 'EEB'),
  makePair('Center for the Study of Slavery and Justice', 'CSSJ'),
  makePair('Molecular Pharmacology, Physiology and Biotechnology', 'MPPB'),
  makePair('Molecular Microbiology and Immunology', 'MMI'),
  makePair('Rhode Island Hospital', 'RIH'),
];
const REVERSE_DEPARTMENTS = Object.fromEntries(DEPARTMENTS.map(department => {
  const codes = Array.isArray(department.value) ? department.value : [department.value];
  return codes.map(code => [code, department.name])
}).flat());

export const departmentCodeToName = (c) => {
  return REVERSE_DEPARTMENTS[c] ? REVERSE_DEPARTMENTS[c] : c;
}

export const getDepartments = (data) => {
  const existingDepartments = data.map(datum => datum.department).flat();
  return DEPARTMENTS.filter(department => {
    const departments = Array.isArray(department.value) ? department.value : [department.value];
    return departments.some(department => existingDepartments.includes(department));
  });
}


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
    if (filters.department !== '') {
      const departments = Array.isArray(filters.department) ? filters.department : [filters.department];
      if (!row.department.some(department => departments.includes(department))) return false;
    }
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

export const extractLowerFromRange = (v) => {
  return parseInt(v.split('-')[0], 10);
}