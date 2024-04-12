import axios from "axios";

const API_URL = "http://restcountries.com/v3.1/all";

const getAllCountriesInfo = async () => {
  try {
    const res = axios.get(API_URL);
    if (res.data !== undefined) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};
export default getAllCountriesInfo;
