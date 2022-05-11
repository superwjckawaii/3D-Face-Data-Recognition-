import axios from "./axios.js";

const ServerUrl= "http://localhost:8000/"
const BaseUrl=ServerUrl+"api/"

export const baseUrl=BaseUrl;

export const getHomeChartData = () => {
  return axios.request({
    url: BaseUrl+"charData",
    method: "get",
  });
};
export const getHistoryChartData = () => {
  return axios.request({
    url: BaseUrl+"getHistoryChartData",
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
    url: BaseUrl+"test",
    method: "get",
  });
};
export const getVisit = () => {
  return axios.request({
    url: BaseUrl+"getVisit",
    method: "get",
  });
};
export const getImage = (filename) => {
  return axios.request({
    url: BaseUrl+"imageResult",
    method: "get",
    responseType: 'blob',//返回图片文件
    params: {
      name:filename
    },
  });
};
export const executeFile = (filename) => {
  return axios.request({
    url: BaseUrl+"excuteFile",
    method: "post",
    data: {
      name:filename
    },
  });
};
export const getHistoryData = () => {
  return axios.request({
    url: BaseUrl+"getHistoryData",
    method: "get",
  });
};
export const getOriImg = (filename) => {
  return axios.request({
    url: BaseUrl+"OriImageResult",
    method: "get",
    responseType: 'blob',//返回图片文件
    params: {
      name:filename
    },
  });
};
export const getReImg = (filename) => {
  return axios.request({
    url: BaseUrl+"ReImageResult",
    method: "get",
    responseType: 'blob',//返回图片文件
    params: {
      name:filename
    },
  });
};
export const getObj = (filename) => {
  return axios.request({
    url: BaseUrl+"getObj",
    method: "get",
    params: {
      name:filename
    },
  });
};
export const FindFile = () => {
  return axios.request({
    url: BaseUrl+"FindFile",
    method: "get",
  });
};
export const DeleteFile = (filename) => {
  return axios.request({
    url: BaseUrl+"DeleteFile",
    method: "post",
    data: {
      name:filename
    },
  });
};
export const isUser = (Tname,Tpassword) => {
  return axios.request({
    url: BaseUrl+"isUser",
    method: "get",
    params: {
      name:Tname,
      password:Tpassword
    },
  });
};
export const getLog = () => {
  return axios.request({
    url: BaseUrl+"getLog",
    method: "get",
  });
};
export const deleteLog = (logId) => {
  return axios.request({
    url: BaseUrl+"deleteLog",
    method: "get",
    params: {
      id:logId,
    },
  });
};