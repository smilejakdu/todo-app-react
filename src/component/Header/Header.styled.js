import styled from "styled-components";
import { NavLink } from "react-router-dom";
import palette from "../../util/styles/palette";

const HeaderBorder = styled.div`
  background: black;
  display: flex;
  position: relative;
  padding: 20px;
`;

const HeaderTitle = styled.div`
  color: white;
  align-items: center;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
    color: ${palette.orange[2]};
  }
`;

const LoginRegisterBorder = styled.div`
  color: white;
  align-items: center;
  font-size: 2rem;
  position: absolute;
  display: flex;
  right: 0;
  padding-right: 10px;
`;

const LoginSignupNav = styled(NavLink)`
  color: white;
  margin-left: 10px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: ${palette.orange[2]};
  }
`;

export { HeaderBorder, HeaderTitle, LoginRegisterBorder, LoginSignupNav };
