import React, { useState, useEffect } from "react";
import "./BoardForm.scss";
import TextareaAutosize from "react-textarea-autosize";
import request from "../../util/request";
import Modal from "../../component/Modal/Modal";

const BoardForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

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
      {localStorage.getItem("token") ? (
        <form>
          <div>
            <TextareaAutosize
              type="text"
              name="title"
              className="board_title"
              value={title}
              minRows={3}
              onChange={(e) => setTitle(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="TITLE"
              required
            />
          </div>
          <div>
            <textarea
              type="text"
              name="content"
              rows="3"
              className="board_content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onKeyPress={handleKeyPress}
              required
              placeholder="CONTENT"
            />
          </div>
          <div>
            <button className="board_btn" type="submit" onClick={handleClick}>
              Button
            </button>
          </div>
        </form>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default BoardForm;
