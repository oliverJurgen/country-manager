import axios, { AxiosInstance } from "axios";

const backendUrl = process.env.backendUrl;

const getAuthedInstance = (accessToken: string) => {
  const instance: AxiosInstance = axios.create({
    baseURL: `${backendUrl}/api`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return instance;
};

export default getAuthedInstance;
