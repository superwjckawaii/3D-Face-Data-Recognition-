import axios from "axios";
import qs from "qs";
import { ElMessage } from "element-plus";

axios.defaults.headers["Content-Type"] = "application/x-www-from-urlencoded";

const service = axios.create({
  baseUrl: "http://localhost:8000/api",
  timeout: 15000,
});

service.interceptors.request.use(
  (config) => {
    if (config.method === "post")
      config.data = qs.stringify(config.data, { indices: false });
  },
  (error) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use((success) => {
  if (success.data.code == 0) return success.data;
  else if (success.data.code == 1) return success.data;
  else {
    ElMessage({
      message: success.data.msg,
      type: "error",
      center: true,
    });
    Promise.reject(success.data);
  }
},error =>{
    ElMessage({
        message: '系统异常，请求中断！！',
        type: "error",
        center: true,
      });
}
);
