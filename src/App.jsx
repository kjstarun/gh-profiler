import Repos from "./components/Repos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Repo from "./components/Repo";
import { useEffect, useState } from "react";
import Followers from "./components/Followers";

function App({ props }) {
  // return <Submit />;
  // return (
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Submit />} />
  //     <Route path="/repo" element={<Repo item={"props"} />} />
  //   </Routes>
  // </BrowserRouter>
  // );
  const [username, setUsername] = useState("");
  const [searchUser, setSearchUser] = useState("");
  const [resultUser, setResultUser] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [followers, setFollowers] = useState([]);
  const [repoDetails, setRepoDetails] = useState({});

  useEffect(() => {
    if (searchUser.length !== 0) {
      console.log("api called");
      fetch(`https://api.github.com/users/${searchUser}/repos`, {
        headers: {
          Authorization:
            "Bearer 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",
        },
      })
        .then((data) => data.json())
        .then((data) => {
          setResultUser(data);
          setCurrentUser({
            name: data[0].owner.login,
            button: "Followers",
          });
        });
    }
  }, [searchUser]);
  const handleUsername = () => {
    if (username.length === 0) {
      return alert("Enter valid username");
    } else {
      setSearchUser(username);
      setUsername("");
    }
  };
  const setRepo = (item) => {
    setRepoDetails(item);
  };
  const fetchFollowers = (name) => {
    console.log("follow api");
    fetch(`https://api.github.com/users/${name}/followers`, {
      headers: {
        Authorization:
          "Bearer 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",
      },
    })
      .then((data) => data.json())
      .then((data) => setFollowers(data));
  };
  const fetchfollowerRepo = (name) => {
    console.log("follow repo called");
    setSearchUser(name);
    // fetch(`https://api.github.com/users/${name}/repos`, {
    //   headers: {
    //     Authorization:
    //       "Bearer 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",
    //   },
    // })
    //   .then((data) => data.json())
    //   .then((data) => setRepoDetails(data));
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Repos
                setUsername={setUsername}
                username={username}
                handleUsername={handleUsername}
                searchUser={searchUser}
                setSearchUser={setSearchUser}
                resultUser={resultUser}
                setResultUser={setResultUser}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                setRepo={setRepo}
                repoDetails={repoDetails}
                setRepoDetails={setRepoDetails}
                fetchFollowers={fetchFollowers}
              />
            }
          />
          <Route path="/repo" element={<Repo repoDetails={repoDetails} />} />
          <Route
            path="/followers"
            element={
              <Followers
                followers={followers}
                fetchfollowerRepo={fetchfollowerRepo}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
