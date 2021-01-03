import React, {useState, useEffect, useRef, useCallback} from "react";
import Header from "../../component/Header/Header";
import request from "../../util/request";
import axios from "axios";
import "./Home.scss";
import BoardForm from "../../component/BoardForm/BoardForm";
import BoardInfoList from "../../component/BoardInfoList/BoardInfoList";
import {NavLink} from "react-router-dom";

const Home = () => {
    const [username, setUsername] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [information, setInformation] = useState([]);
    const [items, setItems] = useState(5);
    const [preItems, setPreItems] = useState(0);

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
                        data: {data},
                    } = res;
                    setUsername(data);
                    setIsAuthenticated(true);
                    handleGetData();
                })
                .catch((err) => {
                    console.log("err : ", err);
                });
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", infiniteScroll);
        return () => {
            // scroll event listener 해제
            window.removeEventListener("scroll", infiniteScroll);
        };
    }, [information.length, items])

    const handleGetData = () => {
        request
            .get("/todos/")
            .then((res) => {
                let {
                    data: {data},
                } = res;
                const result = data.data.slice(preItems, items);
                setInformation([...information, ...result]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const infiniteScroll = () => {
        const {documentElement, body} = document;
        const scrollHeight = Math.max(documentElement.scrollHeight, body.scrollHeight);
        const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
        const clientHeight = documentElement.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight) {
            setPreItems(items)
            setItems(items + 5)
            handleGetData();
        }
    };

    const handleRemove = useCallback((id) => {
        console.log("home handleRemove : ", id);
        request
            .delete(`/todos/${id}`, {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                handleGetData();
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    const handlePost = useCallback((title, content) => {
        let data = {
            title: title,
            content: content,
        };

        request
            .post("/todos/", data, {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                handleGetData();
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])


    const handleOnInputChange = (event) => {
        const query = event.target.value;
        if (!query) {
            handleGetData();
        } else {
            fetchSearchResults(query);
        }
    };

    const fetchSearchResults = (query) => {
        const searchUrl = `/todos/search?query=${query}`;
        request
            .get(searchUrl)
            .then((res) => {
                let {
                    data: {data},
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
                <Header isAuthenticated={isAuthenticated} username={username}/>
            </div>
            <div className="form_border">
                <BoardForm onPost={handlePost}/>
            </div>
            <div className="form__group field">
                <input
                    type="input"
                    className="form__field"
                    placeholder="Name"
                    name="name"
                    id="name"
                    onChange={handleOnInputChange}
                    required
                />
                <label for="name" className="form__label">
                    Search
                </label>
            </div>
            {localStorage.getItem("token") && (
                <div className="todo_tab">
                    <NavLink className="nav_border" to="/" exact={true}>
                        total list
                    </NavLink>
                    <NavLink className="nav_border" to="/mypage" exact={true}>
                        my list
                    </NavLink>
                </div>
            )}
            <div>
                <BoardInfoList
                    className="board_list"
                    username={username}
                    data={information}
                    onRemove={handleRemove}
                />
            </div>
        </div>
    );
};

export default Home;
