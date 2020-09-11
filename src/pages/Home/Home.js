import React, { useState, useEffect, useRef, useCallback } from "react";
import Header from "../../component/Header/Header";
import request from "../../util/request";
import "./Home.scss";
import BoardForm from "../../component/BoardForm/BoardForm";
import BoardInfoList from "../../component/BoardInfoList/BoardInfoList";

const Home = () => {
  const [username, setUsername] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [information, setInformation] = useState([]);

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
          console.log(data);
          setUsername(data);
          setIsAuthenticated(true);
        })
        .catch((err) => {
          console.log("err : ", err);
        });
    }
  }, []);

  useEffect(() => {
    request
      .get("/todos/")
      .then((res) => {
        let {
          data: { data },
        } = res;
        console.log(data.data);
        setInformation(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRemove = (id) => {
    console.log("home handleRemove : ", id);
    request
      .delete(`/todos/${id}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        handleGetData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGetData = () => {
    request
      .get("/todos/")
      .then((res) => {
        let {
          data: { data },
        } = res;
        setInformation(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate = (id, data) => {
    console.log("Home Update : ", id, data);
    request
      .post(`/todos/${id}`, data, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        handleGetData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleTotalTodo = () => {};

  const handleMyTodo = () => {
    request
      .get("/todos/mytodo", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        let {
          data: { data },
        } = res;
        console.log(data);
        setInformation(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} username={username} />
      <BoardForm />
      {localStorage.getItem("token") ? (
        <div className="todo_tab">
          <div onClick={handleTotalTodo}>total list</div>
          <div onClick={handleMyTodo}>my list</div>
        </div>
      ) : (
        <div></div>
      )}
      <div>
        <BoardInfoList
          className="board_list"
          username={username}
          data={information}
          onRemove={handleRemove}
          onUpdate={handleUpdate}
        />
      </div>
    </div>
  );
};

export default Home;
