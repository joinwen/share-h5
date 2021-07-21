import axios from "axios";
const service = axios.create({
  timeout: 6000,
  baseURL: process.env.BASE_URL,
});

const err = (error) => {
  if (error.response) {
    if (error.response.status === 403) {
      // 未授权
      console.log(error.response);
    } else if (error.response.status === 401) {
      // 拒绝访问
      console.log(error.response);
    } else if (error.response.status === 404) {
      // 未找到
      console.log(error.response);
    } else if (error.response.status === 500) {
      // 内部错误
      console.log(error.response);
    }
  } else {
    // 网络错误 或者 超时
    console.log(error.response);
  }
  return Promise.reject(error);
};

// request interceptor
service.interceptors.request.use((config) => {
  return config;
}, err);

// response interceptor
service.interceptors.response.use((response) => {
  const contentDisposition = response.headers["content-disposition"];
  if (contentDisposition && contentDisposition.includes("attachment")) {
    return response;
  } else {
    return response.data;
  }
}, err);

export { service as axios };
