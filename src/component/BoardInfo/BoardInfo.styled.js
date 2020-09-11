import styled from "styled-components";
import palette from "../../util/styles/palette";

const BoardBox = styled.div`
  padding: 8px;
  margin: 8px;
  position: relative;
`;

const BoardData = styled.div`
  all: unset;
  margin: 20px 0;
  overflow-y: auto;
  font-size: 14px;
  padding: 0px 20px;
  width: 80%;
  border-bottom: 1px solid black;
`;

const BtnBorder = styled.div`
  display: flex;
`;

const BoardBtn = styled.div`
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 20px;
  color: black;
  border: 1px solid black;
  color: white;
  background: black;
  margin: 10px 20px;

  &:hover {
    cursor: pointer;
    background-color: grey;
    border: 1px solid white;
    color: black;
  }
`;

const TitleContentLabel = styled.div`
  font-size: 20px;
  display: flex;
`;

const EmailBorder = styled.div`
  display: inline;
  color: ${palette.orange[7]};
  font-style: border;
`;

const Date = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-left: 30px;
  margin-top: 10px;
  width: 50%;
`;

const FormFieldInput = styled.input`
  font-family: inherit;
  width: 50%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${palette.orange[7]};
      font-weight: 700;
    }

    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

const FormLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: ${palette.orange[7]};
`;

export {
  BoardBox,
  BoardData,
  BtnBorder,
  BoardBtn,
  EmailBorder,
  TitleContentLabel,
  Date,
  FormGroup,
  FormFieldInput,
  FormLabel,
};
