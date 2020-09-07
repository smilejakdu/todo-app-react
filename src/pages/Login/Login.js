import React, { useState, useEffect } from "react";
import Header from "../../component/Header/Header";
import Modal from "../../component/Modal/Modal";
import request from "../../util/request";
import { Container, InputForm, Input, Button } from "./Login.styled";
import { Redirect } from "react-router-dom";

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

  useEffect(() => {
    console.log(props);
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
      props.history.push("/");
    }
  }, []);

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
          localStorage.setItem("token", access);
        }
        props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
        setModalShow(true);
        setEmail("");
        setPassword("");
      });
  };

  return (
    <div>
      <Header />
      <div style={{ textAlign: "center" }}></div>
      {modalShow && (
        <Modal
          title={"LOGIN"}
          isOpen={ModalShowOpen}
          close={ModalShowClose}
          text={"check your email , username , password"}
        ></Modal>
      )}
      <Container>
        <InputForm>
          <h1>LOGIN</h1>
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
              placeholder="password"
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
