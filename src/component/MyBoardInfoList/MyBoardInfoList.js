import React, { useState, useEffect } from "react";
import { MyBoardList } from "./MyBoardInfoList.styled";
import MyBoardInfo from "../MyBoardInfo/MyBoardInfo";

const MyBoardInfoList = ({ username, data, onRemove }) => {
  const list = data.map((info) => (
    <MyBoardList>
      <MyBoardInfo
        key={info.id}
        info={info}
        username={username}
        onRemove={onRemove}
      />
    </MyBoardList>
  ));
  return <div>{list}</div>;
};

export default MyBoardInfoList;
