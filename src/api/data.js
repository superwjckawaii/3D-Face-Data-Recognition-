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
export const getDjangoTest = () => {
  return axios.request({
    url: "http://localhost:8000/api/test",
    method: "get",
  });
};
export const getVisit = () => {
  return axios.request({
    url: "http://localhost:8000/api/getVisit",
    method: "get",
  });
};
export const getImage = () => {
  return axios.request({
    url: "http://localhost:8000/api/imageResult",
    method: "get",
    responseType: 'blob',//返回图片文件
  });
};
export const executeFile = (filename) => {
  return axios.request({
    url: "http://localhost:8000/api/excuteFile",
    method: "post",
    data: {
      name:filename
    },
  });
};