import React, { useState, useEffect } from "react";
import {
  HeaderBorder,
  HeaderTitle,
  LoginRegisterBorder,
  LoginSignupNav,
} from "./Header.styled";
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, username }) => {
  const logoutBtnClick = () => {
    console.log(localStorage.getItem("token"));
    localStorage.removeItem("token");
    console.log(localStorage.getItem("token"));
    window.location.reload();
  };

  return (
    <div>
      <HeaderBorder>
        <HeaderTitle>
          {isAuthenticated ? (
            <LoginSignupNav to="/">{username}</LoginSignupNav>
          ) : (
            <LoginSignupNav to="/">todo-app</LoginSignupNav>
          )}
        </HeaderTitle>
        <LoginRegisterBorder>
          {isAuthenticated ? (
            <div onClick={logoutBtnClick}>Logout</div>
          ) : (
            <div>
              <LoginSignupNav to="/login">Login</LoginSignupNav>
              <LoginSignupNav to="/signup">Signup</LoginSignupNav>
            </div>
          )}
        </LoginRegisterBorder>
      </HeaderBorder>
    </div>
  );
};

export default Header;