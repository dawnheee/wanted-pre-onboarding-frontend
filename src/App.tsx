import React from "react";
import "./App.css";
import styled from "@emotion/styled";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import Todo from "pages/Todo";
function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Page>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todo" element={<Todo />} />
          {token ? (
            <Route path="/" element={<Navigate to="/todo" />} />
          ) : (
            <Route path="/" element={<Navigate to="/signin" />} />
          )}
        </Routes>
      </Page>
    </BrowserRouter>
  );
}

export default App;

const Page = styled("div")`
  background-color: #ffffff1c;
  border-radius: 10px;
  border: 2px solid white;
  height: 60vh;
  width: 35vw;
  padding: 20px 5px 20px 5px;
  align-items: center;
`;
