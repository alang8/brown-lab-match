const BASE_URL = 'https://project-lab-test.herokuapp.com/'

const parseLinks = (s) => {
  return s.split(', ').map(substr => {
    const [name, url] = substr.split('- ');
    return {
      name,
      url,
    }
  });
}

const parseKeywords = (s) => {
  return s.split(', ');
}

const parseData = (data) => {
  return data.map(datum => ({
    ...datum,
    id: datum.uid,
    autonomy: datum['avg_autonomy'],
    communication: (datum['avg_communicationPI'] + datum['avg_communicationMentor']) / 2,
    integration: datum['avg_integration'],
    publications: parseLinks(datum.publications),
    pis: parseLinks(datum.pis),
    keywords: parseKeywords(datum.keywords),
    rating: datum['avg_experience'],
    size: datum['number_undergraduates'] + datum['number_graduates'],
    totalHours: datum['avg_hoursInLab'] + datum['avg_hoursOutLab'],
  }));
}

export const getAllLabs = () => {
  return fetch(BASE_URL + 'alllabs', {
    method: 'GET',
  }).then(r => {
    if (r.ok) {
      return r.json();
    } else {
      throw new Error('Failed to load data from server');
    }
  }).then(parseData);
}

export const getQueryLabs = (query) => {
  const params = new URLSearchParams();
  params.set('term', query);
  return fetch(BASE_URL + 'labssearch?' + params.toString(), {
    method: 'GET',
  }).then(r => {
    if (r.ok) {
      return r.json();
    } else {
      throw new Error('Failed to load data from server');
    }
  }).then(parseData);
}