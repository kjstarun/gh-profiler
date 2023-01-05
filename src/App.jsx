import Repos from "./components/Repos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Repo from "./components/Repo";
import { useEffect, useState } from "react";
import Followers from "./components/Followers";
import Home from "./components/Home";
import Loader from "./components/loader";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchUser.length !== 0) {
      console.log("api called");
      setLoading(true);
      setCurrentUser([]);
      setResultUser([]);
      fetch(`https://api.github.com/users/${searchUser}/repos`, {
       
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
    setLoading(true);
    setResultUser([]);
    setCurrentUser([]);
    fetch(`https://api.github.com/users/${name}/followers`, {
      
    })
      .then((data) => data.json())
      .then((data) => {
        setFollowers(data);
        setLoading(false);
      });
  };
  const fetchfollowerRepo = (name) => {
    console.log("follow repo called");
    setSearchUser(name);
  };
  return (
    <>
      {loading ? <Loader /> : ""}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setUsername={setUsername}
                username={username}
                handleUsername={handleUsername}
              />
            }
          />
          <Route
            path="/username/:id"
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
                username={username}
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
