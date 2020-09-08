import React, { useState, useEffect, useRef, useCallback } from "react";
import Header from "../../component/Header/Header";
import request from "../../util/request";
import "./Home.scss";
import BoardForm from "../../component/BoardForm/BoardForm";
import BoardInfoList from "../../component/BoardInfoList/BoardInfoList";

const Home = (props) => {
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
      .get("/todos")
      .then((res) => res.json())
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
  }, [information]);

  const handleRemove = (id) => {
    request
      .delete("" + id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate = (id) => {
    let data = {
      title: data.title,
      content: data.content,
      headers: {
        "Content-Type": "application/json",
      },
    };
    request
      .post("" + id, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} username={username} />
      <BoardForm />
      <div>
        <BoardInfoList
          className="board_list"
          data={information}
          onRemove={handleRemove}
          onUpdate={handleUpdate}
        />
      </div>
    </div>
  );
};

export default Home;
