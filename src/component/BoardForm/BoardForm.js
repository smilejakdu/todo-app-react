import React, { useState, useEffect } from "react";
import "./BoardForm.scss";
import TextareaAutosize from "react-textarea-autosize";
import request from "../../util/request";

const BoardForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleClick = (e) => {
    let data = {
      title: title,
      content: content,
    };

    request
      .post("/todos/", data, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="board_box">
      <form>
        <div>
          <TextareaAutosize
            type="text"
            name="title"
            className="board_title"
            value={title}
            minRows={3}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="write down memo title"
          />
        </div>
        <div>
          <TextareaAutosize
            type="text"
            name="content"
            className="board_content"
            value={content}
            minRows={3}
            onChange={(e) => setContent(e.target.value)}
            placeholder="write down url"
          />
        </div>
        <div>
          <button className="board_btn" type="submit" onClick={handleClick}>
            버튼
          </button>
        </div>
      </form>
    </div>
  );
};

export default BoardForm;
