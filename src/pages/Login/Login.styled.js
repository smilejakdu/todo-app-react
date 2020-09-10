import styled from "styled-components";
import palette from "../../util/styles/palette";

const Container = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputForm = styled.div`
  padding-top: 60px;
  margin: 0 auto;
  align-items: center;
  height: 350px;
  width: 400px;
  border-radius: 15px;
  background: #f2f3f7;
  position: relative;

  h1 {
    display: flex;
    text-align: center;
    justify-content: center;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  background: ${palette.orange[6]};
  font-size: 2rem;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  width: 80%;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background: ${palette.orange[2]};
    color: coral;
  }
`;

const Input = styled.input`
  font-size: 1rem;
  display: flex;
  border: none;
  outline: none;
  border-bottom: 1px solid ${palette.orange[2]};
  background: #f2f3f7;
  width: 80%;
  margin: 30px;

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid coral;
  }
`;

export { Container, InputForm, Button, Input };
