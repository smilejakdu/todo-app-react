import React, {useState, useEffect, useCallback} from "react";
import {
    BoardBox,
    BtnBorder,
    BoardBtn,
    EmailBorder,
    Date,
    FormGroup,
    FormFieldInput,
    FormLabel,
} from "./MyBoardInfo.styled";

const MyBoardInfo = ({key, info, onRemove, username}) => {
    console.log("BoardInfo info : ", info);
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");


    const handleRemove = useCallback(() => {

        if (localStorage.getItem("token")) {
            onRemove(info.id);
        }
    })

    return (
        <BoardBox>
            <EmailBorder>{info.username}</EmailBorder>
            {editing ? (
                <div>
                    <FormGroup>
                        <FormFieldInput
                            placeholder="title"
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                            id="title"
                            value={title}
                            required
                        />
                        <FormLabel>Title</FormLabel>
                    </FormGroup>
                    <FormGroup>
                        <FormFieldInput
                            placeholder="Content"
                            name="content"
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                            id="content"
                            required
                        />
                        <FormLabel>Content</FormLabel>
                    </FormGroup>
                </div>
            ) : (
                <div>
                    <h2>title</h2>
                    <div>{info.title}</div>
                    <h2>content</h2>
                    <div>{info.content}</div>
                    <Date>{info.created_at}</Date>
                </div>
            )}
            {username === info.username ? (
                <BtnBorder>
                    <BoardBtn onClick={handleRemove}>삭제</BoardBtn>
                </BtnBorder>
            ) : (
                <div>

                </div>
            )}
        </BoardBox>
    );
};

export default MyBoardInfo;
