import { Link } from "react-router-dom";
import "../assets/home.css";
const Home = ({ setUsername, username, handleUsername }) => {
  return (
    <div className="home-page">
      <h1 className="header">GITHUB PROFILER</h1>
      <input
        className="username-input"
        type="text"
        placeholder="Enter a GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Link to={`/username/${username}`}>
        <button
          className="home-button"
          title={username ? `Search for ${username}'s repositories` : ""}
          onClick={handleUsername}
        >
          Search for Repositories
        </button>
      </Link>
    </div>
  );
};
export default Home;
