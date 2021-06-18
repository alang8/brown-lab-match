const BASE_URL = 'https://api.airtable.com/v0/appe5NHBu3T33LXwf/'

const API_KEY = process.env.REACT_APP_API_KEY
/*
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
*/
const parseDatum = (datum) => ({
  // there's new fields added like noteworthy_experience, time_as_part_of_lab. Department is the full name as well.
  ...datum.fields,
  id: datum.id,
  // ome of these are blank, not sure if it will cause error.
  autonomy: datum.fields['avg_autonomy'],
  communication: (datum.fields['avg_communicationPI'] + datum.fields['avg_communicationMentor']) / 2,
  // this is just the professor's email now, maybe we should add some general text here for all labs
  gettingStarted: datum.fields['getting_started'],
  integration: datum.fields['avg_integration'],
  // this field got deleted when the club entered data, we can discuss what to do with this.
  isOpenPosition: datum.fields['open_position'],
  // this is just one link to publications on vivo now, the old parsing is no longer needed
  publications: [{
    name: datum.fields.publications,
    url: 'https://www.google.com'
  }],
  // all of them have one professor only and its a string.
  pis: [{
    name: datum.fields.professor,
    url: 'https://www.google.com'
  }],
  keywords: datum.fields.keywords,
  rating: datum.fields['avg_overall'],
  // this is a string like 1-5 now, not sure how we want to deal with it
  size: datum.fields['total_lab_members'],
  // this is also a string like 1-5 now
  totalHours: datum.fields['avg_hoursInLab'] + datum.fields['avg_hoursOutLab'],
})

const parseData = (data) => {
  return data.records.map(parseDatum);
}

export const getAllLabs = () => {
  return fetch(BASE_URL + 'labs?&view=Grid%20view', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    }
  }).then(r => {
    if (r.ok) {
      return r.json();
    } else {
      throw new Error('Failed to load data from server');
    }
  }).then(parseData);
}

export const getQueryLabs = (query) => {
  query = query.toLowerCase()
  const searchUrl = BASE_URL + `tbl3xI0ZCiHdRPVNP?filterByFormula=FIND(%22${query}%22%2CLOWER(%7Bname%7D))%2BFIND(%22${query}%22%2CLOWER(%7Bkeywords%7D))%2BFIND(%22${query}%22%2CLOWER(%7Bprofessor%7D))%2BFIND(%22${query}%22%2CLOWER(%7Bdescription%7D))`
  return fetch(searchUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    }
  }).then(r => {
    if (r.ok) {
      return r.json();
    } else {
      throw new Error('Failed to load data from server');
    }
  }).then(parseData);
}

export const getLab = (id) => {
  return fetch(BASE_URL + 'labs/' + id, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    }
  }).then(r => {
    if (r.ok) {
      return r.json();
    } else {
      if (r.status === 404) return false;
      throw new Error('Failed to load data from server');
    }
  }).then(parseDatum);
}