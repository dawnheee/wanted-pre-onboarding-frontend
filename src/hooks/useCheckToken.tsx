import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useCheckToken = (redirectPath: string) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/todo");
    } else {
      navigate(redirectPath);
    }
  }, []);
};
