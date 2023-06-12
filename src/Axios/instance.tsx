import axios from "axios";
const config = {
  baseURL: "https://www.pre-onboarding-selection-task.shop/",
  headers: {
    "Content-Type": "application/json",
  },
};
export const instance = axios.create(config);

instance.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");
  request.headers!.authorization = `Bearer ${token}`;
  return request;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.data.message === "해당 사용자가 존재하지 않습니다.") {
      alert("email과 password를 확인해주세요!");
    }
    // else if (error.response.data.message === "Unauthorized") {
    //   console.log("안녕");
    // }
    return Promise.reject(error);
  }
);
