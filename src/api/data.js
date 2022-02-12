import axios from "./axios.js";

export const getHomeChartData = () => {
  return axios.request({
    url: "/Home/ChartData",
    method: "get",
  });
};
