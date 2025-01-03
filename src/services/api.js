import axios from "axios";

const api = axios.create({
  baseURL: "https://api.yourdomain.com/",
  timeout: 10000,
});

export const fetchCompanies = async () => {
  try {
    const response = await api.get("/companies");
    return response.data;
  } catch (error) {
    console.error("Error fetching companies:", error);
  }
};
