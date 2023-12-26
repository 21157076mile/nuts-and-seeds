import axios from "axios";

interface ICity {
  country: string;
  cities: string[];
}
const CityService = {
  getAllCities(): Promise<ListResponse<ICity>> {
    return axios.get("https://countriesnow.space/api/v0.1/countries", {
      params: {
        page: 1,
        limit: 10,
      }
    });
  }
  // params: { page: 1, limit: 10 }
};

export default CityService;

