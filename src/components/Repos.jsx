import { Link } from "react-router-dom";
import "../assets/repos.css";

const Repos = ({
  searchUser,
  setSearchUser,
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
    <div className="repos-parent">
      {currentUser.hasOwnProperty("name") ? (
        <>
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
          <Link to="/followers">
            <button
              className="followers-button"
              onClick={() => fetchFollowers(currentUser.name)}
            >
              {currentUser.button}
            </button>
          </Link>
        </>
      ) : (
        <></>
      )}
      <div className="repo-list">
        {resultUser.map((item) => {
          return (
            <>
              {/* <img src={item.owner.avatar_url} height={50} /> */}
              <Link to="/repo" className="repo-name">
                <p onClick={() => setRepo(item)}>{item.name}</p>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Repos;
