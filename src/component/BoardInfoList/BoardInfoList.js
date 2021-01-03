import React, {useState, useEffect} from "react";
import BoardInfo from "../BoardInfo/BoardInfo";
import {BoardList} from "./BoardInfoList.styled";
import {useDispatch, useSelector} from "react-redux";

const BoardInfoList = ({username, data, onRemove, onUpdate}) => {
    const list = data.map((info) => (
        <BoardList>
            <BoardInfo
                key={info.id}
                info={info}
                username={username}
                onRemove={onRemove}
                onUpdate={onUpdate}
            />
        </BoardList>
    ));
    return (
        <div>
            {list}
        </div>
    );
};

export default BoardInfoList;
