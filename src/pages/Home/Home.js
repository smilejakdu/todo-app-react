import React, { useState, useEffect, useRef, useCallback } from "react";
import Header from "../../component/Header/Header";
import request from "../../util/request";
import TodoTemplate from "../../component/ToeoTemplate/TodoTemplate";
import TodoInsert from "../../component/TodoInsert.js/TodoInsert";
import TodoList from "../../component/TodoList/TodoList";
import "./Home.scss";

const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `todo${i}`,
      checked: false,
    });
  }
  return array;
};

const Home = (props) => {
  const [username, setUsername] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [todos, setTodos] = useState([]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  useEffect(() => {
    if (localStorage.getItem("token")) {
      request
        .get("/user/token", {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          let {
            data: { data },
          } = res;
          setUsername(data);
          setIsAuthenticated(true);
        })
        .catch((err) => {
          console.log("err : ", err);
        });
    }
  }, []);

  useEffect(() => {
    console.log("username : ", username);
  });

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} username={username} />
      {username ? <div> hi ^^{username} </div> : <div>hi ^^ users</div>}

      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
};

export default Home;
