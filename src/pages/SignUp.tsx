import React from "react";
import { useValid } from "hooks/useValid";
import { useCheckToken } from "hooks/useCheckToken";

import { useNavigate } from "react-router-dom";
import { postAPI } from "../Axios/apis";
function SignUp() {
  useCheckToken("/signup");

  const { onChangeHandler, userInfo, valid } = useValid();
  const navigate = useNavigate();

  const SignUpHandler = () => {
    postAPI("/auth/signup", { ...userInfo }).then((res) => {
      if (res!.status === 201) {
        navigate("/signin");
      }
    });
  };
  return (
    <section>
      <div className="pageName">SignUp</div>

      <form className="contents">
        <section className="auth-inputs">
          <input
            data-testid="email-input"
            placeholder="email"
            name="email"
            onChange={onChangeHandler}
            autoComplete="off"
          />
          <input
            data-testid="password-input"
            placeholder="password"
            name="password"
            type="password"
            onChange={onChangeHandler}
          />
        </section>
        <button
          data-testid="signup-button"
          type="button"
          onClick={SignUpHandler}
          disabled={valid.disabled}
          className="auth-button"
        >
          SignUp
        </button>
      </form>
    </section>
  );
}

export default SignUp;
