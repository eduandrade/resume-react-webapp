const axios = require('axios');

async function fetchData(endpoint) {
  try {
    const resp = await axios.get(
      `https://edupandrade-eval-prod.apigee.net/resume/v1${endpoint}`
    );
    console.log(resp);
    return resp.data;
  } catch (error) {
    console.error(error);
    return new Error(`Failed to fetch ${endpoint}`);
  }
}

export { fetchData };
