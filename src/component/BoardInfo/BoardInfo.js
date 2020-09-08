import React, { Fragment, useState, useEffect } from "react";
import "./BoardInfo.scss";

const BoardInfo = (props) => {
  console.log(props);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  const handleToggleEdit = () => {
    // true -> false
    // onUpdate
    // false -> true
    // state 에 info 값들 넣어주기
    const { info, onUpdate } = this.props;
    if (editing) {
      setTitle(title);
      setContent(content);
    } else {
      setTitle(info.title);
      setContent(info.content);
    }
    setEditing(!editing);
  };

  const handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="board_box">
      {editing ? (
        <Fragment>
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
          <a href={content}>
            <div>{title}</div>
            <div>{content}</div>
          </a>
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
