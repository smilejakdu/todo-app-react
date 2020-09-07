import React, { useState, useEffect } from "react";
import Header from "../../component/Header/Header";
import request from "../../util/request";
const Home = (props) => {
  const [username, setUsername] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
    </div>
  );
};

export default Home;
