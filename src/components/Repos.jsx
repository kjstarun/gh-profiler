import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Repos = ({
  setUsername,
  username,
  searchUser,
  setSearchUser,
  handleUsername,
  resultUser,
  setResultUser,
  currentUser,
  setCurrentUser,
  setRepo,
  repoDetails,
  setRepoDetails,
  fetchFollowers,
}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter a username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleUsername}>Repos</button>
      {currentUser.hasOwnProperty("name") ? (
        <>
          <h3>{currentUser.name}</h3>
          <Link to="/followers">
            <button onClick={() => fetchFollowers(currentUser.name)}>
              {currentUser.button}
            </button>
          </Link>
        </>
      ) : (
        <></>
      )}
      {resultUser.map((item) => {
        return (
          <div>
            <img src={item.owner.avatar_url} height={50} />
            <Link to="/repo">
              <p onClick={() => setRepo(item)}>{item.name}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default Repos;
