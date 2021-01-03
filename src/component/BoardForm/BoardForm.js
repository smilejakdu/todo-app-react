import React, {useState, useEffect, useCallback} from "react";
import "./BoardForm.scss";
import TextareaAutosize from "react-textarea-autosize";
import request from "../../util/request";
import Modal from "../../component/Modal/Modal";

const BoardForm = ({onPost}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleClick = useCallback((e) => {
        e.preventDefault();
        onPost(title, content);
        setTitle("");
        setContent("");
    }, [title, content])

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
                            placeholder="TITLE"
                            required
                        />
                    </div>
                    <div>
                        <TextareaAutosize
                            type="text"
                            name="content"
                            rows="3"
                            className="board_content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
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
