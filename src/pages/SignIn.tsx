import React from "react";
import { postAPI } from "../Axios/apis";
import { useNavigate } from "react-router-dom";
import { useValid } from "../hooks/useValid";
import { useCheckToken } from "../hooks/useCheckToken";
import styled from "@emotion/styled";

function SignIn() {
  const navigate = useNavigate();
  useCheckToken("/signin");
  const { onChangeHandler, userInfo, valid } = useValid();
  const LogInHandler = () => {
    postAPI("/auth/signin", { ...userInfo }).then((res) => {
      if (res?.status === 200) {
        localStorage.setItem("token", res.data.access_token);
        navigate("/todo");
      }
    });
  };
  return (
    <section>
      <div className="pageName">Sign In</div>
      <form className="contents">
        <section className="auth-inputs">
          <input
            name="email"
            onChange={onChangeHandler}
            placeholder="email"
            data-testid="email-input"
          />
          <input
            name="password"
            type="password"
            onChange={onChangeHandler}
            placeholder="password"
            data-testid="password-input"
          />
        </section>
        <AuthButtons>
          <button
            type="button"
            onClick={LogInHandler}
            disabled={valid.disabled}
            data-testid="signin-button"
            className="auth-button"
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/signup");
            }}
            className="auth-button"
          >
            Go to Sign Up
          </button>
        </AuthButtons>
      </form>
    </section>
  );
}

export default SignIn;

const AuthButtons = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 35%;
  justify-content: space-between;
`;
