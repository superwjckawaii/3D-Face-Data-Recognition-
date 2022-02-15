import axios from "./axios.js";

export const getHomeChartData = () => {
  return axios.request({
    url: "/Home/ChartData",
    method: "get",
  });
};
export const pushFileData = (file)=> {
  return axios.request({
    url: "/Datapush/FileData",
    method: "post",
    data: file
  });
};
