import axios from "axios"
import { DEFAULT_BASE_URL } from "./axios"

const apiService = {
  fetchTertiarySchools: () => {
    return axios.get(`${DEFAULT_BASE_URL}/`)
  }
}

export { apiService }
