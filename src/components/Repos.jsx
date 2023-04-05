import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import "../assets/repos.css";
import Loader from "./loader";
import * as dotenv from "dotenv";
dotenv.config();

const Repos = ({ username, setUsername, loading, setLoading }) => {
  const [searchUser, setSearchUser] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [resultUser, setResultUser] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    setUsername("");
    if (id) {
      setSearchUser(id);
    } else if (username.length === 0 || username === "") {
      return alert("Enter valid username");
    } else {
      setSearchUser(username);
    }
  }, []);

  useEffect(() => {
    if (searchUser.length !== 0) {
      console.log("api called");
      setLoading(true);
      setCurrentUser([]);
      setResultUser([]);
      fetch(`https://api.github.com/users/${searchUser}/repos`, {
        headers: {
          Authorization: process.env.Authorization,
        },
      })
        .then((data) => data.json())
        .then((data) => {
          setResultUser(data);
          setLoading(false);
          setCurrentUser({
            name: data[0].owner.login,
            button: "Followers",
            id: data[0].owner.id,
          });
        });
    }
  }, [searchUser]);

  // const resultUser = useLoaderData()

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="repos-parent">
          {currentUser.hasOwnProperty("name") ? (
            <header>
              <h3 className="username">
                <span>
                  <span> Username: </span> {currentUser.name}
                </span>
                <span>
                  <span>User Id: </span> {currentUser.id}
                </span>
              </h3>
              <img
                src={resultUser[0].owner.avatar_url}
                alt="Profile picture not found"
                height={80}
                width={80}
              />
              <Link to={`/followers/${searchUser}`}>
                <button className="followers-button">
                  {currentUser.button}
                </button>
              </Link>
            </header>
          ) : (
            <></>
          )}
          <div className="repo-list">
            {resultUser.map((item) => {
              return (
                <>
                  <Link
                    to={`/repo/${searchUser}/${item.name}`}
                    className="repo-name">
                    <p>{item.name}</p>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default Repos;
