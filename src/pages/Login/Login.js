import React, { useState, useEffect } from "react";
import Header from "../../component/Header/Header";
import Modal from "../../component/Modal/Modal";
import request from "../../util/request";
import { Container, InputForm, Input, Button } from "./Login.styled";

const Login = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ModalShowOpen = () => {
    setModalShow(true);
  };

  const ModalShowClose = () => {
    setModalShow(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    request
      .post("/user/signin", {
        email: email,
        password: password,
      })
      .then((res) => {
        setEmail(email);
        setPassword(password);

        if (res.data || res) {
          let {
            data: { access },
          } = res;
          console.log(access);
          localStorage.setItem("jakdu", access);
        }
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        alert("에러");
      });
  };

  return (
    <div>
      <Header />
      <div style={{ textAlign: "center" }}></div>
      {modalShow && (
        <Modal
          isOpen={ModalShowOpen}
          close={ModalShowClose}
          text={"아이디와 비밀번호를 확인하세요"}
        ></Modal>
      )}
      <Container>
        <InputForm>
          <h1>LOGIN</h1>
          {/* <form onSubmit={handleSubmit}> */}
          <div className="form-group">
            <Input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              required
            />
          </div>
          <div className="form-group">
            <Input
              type="password"
              placeholder="비밀번호"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              required
            />
          </div>
          <Button type="button" onClick={handleClick}>
            Login
          </Button>
          {/* </form> */}
        </InputForm>
      </Container>
    </div>
  );
};

export default Login;
