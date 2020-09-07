import React, { useState, useEffect } from "react";
import "./TodoTemplate.scss";
const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">todo list</div>
      <div className="content">{children}</div>
    </div>
  );
};
export default TodoTemplate;
