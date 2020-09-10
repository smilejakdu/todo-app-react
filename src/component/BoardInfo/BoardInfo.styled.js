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

export {
  BoardBox,
  BoardData,
  BtnBorder,
  BoardBtn,
  EmailBorder,
  TitleContentLabel,
};
