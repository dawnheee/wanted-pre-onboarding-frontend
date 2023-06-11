import { instance } from "./instance";
import { UpdateBody, User } from "types";

export const getAPI = async (url: string) => {
  //todo arr / todo get
  try {
    const res = await instance.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteAPI = async (url: string) => {
  // todo delete
  try {
    const res = await instance.delete(url);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const putAPI = async (url: string, data: UpdateBody) => {
  //todo 수정
  try {
    const res = await instance.put(url, data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const postAPI = async (url: string, data: string | User) => {
  //회원가입, 로그인, todo 등록

  try {
    const res = await instance.post(url, data);

    return res;
  } catch (error) {
    console.log(error);
  }
};
