import React, { useState, useEffect } from "react";
import { BoardBox, BtnBorder, BoardBtn, EmailBorder } from "./BoardInfo.styled";

const BoardInfo = ({ key, info, onRemove, onUpdate, username }) => {
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
    <BoardBox>
      <EmailBorder>{info.username}</EmailBorder>
      {editing ? (
        <>
          <input
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            name="content"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </>
      ) : (
        <>
          <h2>title</h2>
          <div>{info.title}</div>
          <h2>content</h2>
          <div>{info.content}</div>
        </>
      )}
      {username === info.username ? (
        <BtnBorder>
          <BoardBtn onClick={handleRemove}>삭제</BoardBtn>
          <BoardBtn onClick={handleToggleEdit}>
            {editing ? "적용" : "수정"}
          </BoardBtn>
        </BtnBorder>
      ) : (
        <div></div>
      )}
    </BoardBox>
  );
};

export default BoardInfo;
