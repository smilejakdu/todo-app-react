import React, { useState, useEffect } from "react";
import "./BoardInfoList.scss";
import BoardInfo from "../BoardInfo/BoardInfo";

const BoardInfoList = ({ data, onRemove, onUpdate }) => {
  const list = data.map((info) => (
    <div className="board_list">
      <BoardInfo
        key={info.id}
        info={info}
        onRemove={onRemove}
        onUpdate={onUpdate}
      />
    </div>
  ));
  return <div>{list}</div>;
};
export default BoardInfoList;
