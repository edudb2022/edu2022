import axios from "axios";
import { DEFAULT_BASE_URL } from "./axios";

const fetchTertiarySchools = () => {
  return axios.get(`${DEFAULT_BASE_URL}/`);
};

const fetchTertiarySchoolReview = () => {
  return axios.get(`${DEFAULT_BASE_URL}/`);
};

const fetchTertiaryAdmissions = () => {
  return axios.get(`${DEFAULT_BASE_URL}/`);
};

const fetchTertiaryInterviews = () => {
  return axios.get(`${DEFAULT_BASE_URL}/`);
};

const fetchTertiaryGradJobs = () => {
  return axios.get(`${DEFAULT_BASE_URL}/`);
};

const fetchTertiaryInternships = () => {
  return axios.get(`${DEFAULT_BASE_URL}/`);
};
