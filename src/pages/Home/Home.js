import React, { useState, useEffect } from "react";
import Header from "../../component/Header/Header";
import request from "../../util/request";
const Home = (props) => {
  const [username, setUsername] = useState("");

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
      <Header />
      hi
      <div>{username}</div>
    </div>
  );
};

export default Home;
