import axios from 'axios'

const SWAPI_BASE_URL = 'https://swapi.dev/api/'

export const getStarWarsData = async (endpoint) => {
  try {
    const response = await axios.get(`${SWAPI_BASE_URL}${endpoint}`)
    return response.data
  } catch (error) {
    console.error('Error fetching data from SWAPI:', error)
  }
}
