import { Link } from "react-router-dom";
import "../assets/home.css";
import Loader from "./loader";
const Home = ({ setUsername, username, loading }) => {
  const handleEmpty = () => {
    if (!username) {
      alert("Enter valid input");
    }
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="home-page">
          <h1 className="header">GITHUB PROFILER</h1>
          <input
            className="username-input"
            type="text"
            placeholder="Enter a GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Link to={username ? `/username/${username}` : "/"}>
            <button
              className="home-button"
              title={username ? `Search for ${username}'s repositories` : ""}
              onClick={handleEmpty}
            >
              Search for Repositories
            </button>
          </Link>
        </div>
      )}
    </>
  );
};
export default Home;
