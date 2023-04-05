import Repos from "./components/Repos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Repo from "./components/Repo";
import { useState } from "react";
import Followers from "./components/Followers";
import Home from "./components/Home";

function App() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      {/* {loading ? <Loader /> : ""} */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            caseSensitive={true}
            element={
              <Home
                setUsername={setUsername}
                username={username}
                loading={loading}
                setLoading={setLoading}
              />
            }
          />
          <Route
            path="username/:id"
            caseSensitive={true}
            // loader={() => {
            //JEST
            // }}
            element={
              <Repos
                setUsername={setUsername}
                username={username}
                loading={loading}
                setLoading={setLoading}
              />
            }
          />
          <Route
            path="/repo/:id/:name"
            element={<Repo setLoading={setLoading} loading={loading} />}
          />
          <Route
            path="/followers/:id"
            element={
              <Followers
                username={username}
                loading={loading}
                setLoading={setLoading}
              />
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
