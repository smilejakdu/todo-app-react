import React, { useState, useEffect } from "react";
import Header from "../../component/Header/Header";
import request from "../../util/request";
import BoardForm from "../../component/BoardForm/BoardForm";
import axios from "axios";
import { NavLink } from "react-router-dom";
import MyBoardInfoList from "../../component/MyBoardInfoList/MyBoardInfoList";

const Mypage = () => {
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
          myTodoListGet();
        })
        .catch((err) => {
          console.log("err : ", err);
        });
    }
  }, []);

  const myTodoListGet = () => {
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
        setInformation(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemove = (id) => {
    console.log("home handleRemove : ", id);
    request
      .delete(`/todos/${id}`, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        myTodoListGet();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOnInputChange = (event) => {
    const query = event.target.value;
    if (!query) {
      myTodoListGet();
    } else {
      fetchSearchResults(query);
    }
  };

  const fetchSearchResults = (query) => {
    const searchUrl = `/todos/mylistsearch?query=${query}`;
    request
      .get(searchUrl)
      .then((res) => {
        let {
          data: { data },
        } = res;
        setInformation(data.data);
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          console.log("error : ", error);
        }
      });
  };

  return (
    <div>
      <div className="header_border">
        <Header isAuthenticated={isAuthenticated} username={username} />
      </div>
      <div className="form_border">
        <BoardForm />
      </div>
      <div class="form__group field">
        <input
          type="input"
          class="form__field"
          placeholder="Name"
          name="name"
          id="name"
          onChange={handleOnInputChange}
          required
        />
        <label for="name" class="form__label">
          Search
        </label>
      </div>
      {localStorage.getItem("token") ? (
        <div className="todo_tab">
          <NavLink className="nav_border" to="/" exact={true}>
            total list
          </NavLink>
          <NavLink className="nav_border" to="/mypage" exact={true}>
            my list
          </NavLink>
        </div>
      ) : (
        <div></div>
      )}
      <div>
        <MyBoardInfoList
          className="board_list"
          username={username}
          data={information}
          onRemove={handleRemove}
        />
      </div>
    </div>
  );
};

export default Mypage;
