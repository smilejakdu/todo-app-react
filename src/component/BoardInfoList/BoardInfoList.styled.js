import styled from "styled-components";
import palette from "../../util/styles/palette";

const BoardList = styled.div`
  border-radius: 20px;
  margin: 10px 20px;
  border: 1px solid ${palette.orange[6]};
`;
const Container = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { BoardList };
