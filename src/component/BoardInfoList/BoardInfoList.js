import React, { useState, useEffect } from "react";
import BoardInfo from "../BoardInfo/BoardInfo";
import { BoardList } from "./BoardInfoList.styled";

const BoardInfoList = ({ username, data, onRemove }) => {
  const list = data.map((info) => (
    <BoardList>
      <BoardInfo
        key={info.id}
        info={info}
        username={username}
        onRemove={onRemove}
      />
    </BoardList>
  ));
  return <div>{list}</div>;
};

export default BoardInfoList;
