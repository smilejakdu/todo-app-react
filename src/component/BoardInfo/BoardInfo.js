import React, { Fragment, useState, useEffect } from "react";
import "./BoardInfo.scss";

const BoardInfo = ({ key, info, onRemove, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleRemove = () => {
    if (localStorage.getItem("token")) {
      onRemove(info.id);
    }
  };

  const handleToggleEdit = () => {
    if (localStorage.getItem("token")) {
      if (editing) {
        setTitle(title);
        setContent(content);
        let load = {
          title: title,
          content: content,
        };
        onUpdate(info.id, load);
      } else {
        setTitle(info.title);
        setContent(info.content);
        let load = {
          title: info.title,
          content: info.content,
        };
        onUpdate(info.id, load);
      }
      setEditing(!editing);
    }
  };

  return (
    <div className="board_box">
      {editing ? (
        <Fragment>
          <div>{info.email}</div>
          <div>
            <input
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div>
            <input
              name="content"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div>{info.email}</div>
          <div>{info.title}</div>
          <div>{info.content}</div>
        </Fragment>
      )}
      <button className="board_btn" onClick={handleRemove}>
        삭제
      </button>
      <button className="board_btn" onClick={handleToggleEdit}>
        {editing ? "적용" : "수정"}
      </button>
    </div>
  );
};

export default BoardInfo;
