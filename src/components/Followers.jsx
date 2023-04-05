import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import "../assets/followers.css";
import Loader from "./loader";
import * as dotenv from 'dotenv'
dotenv.config()

const Followers = ({ username, loading, setLoading }) => {
  const [followers, setFollowers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    console.log("follow api");
    setLoading(true);
    fetch(`https://api.github.com/users/${id}/followers`, {
      headers: {
        Authorization: process.env.Authorization,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setFollowers(data);
        setLoading(false);
      });
  }, []);

  console.log("current", username);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="followers-page">
          <header className="followers-header">
            <span> Followers of</span> <span> {id}</span>
          </header>
          <div className="followers-list">
            {followers.map((item) => {
              console.log("map called");
              return (
                <>
                  <Link
                    className="follower-username"
                    to={`/username/${item.login}`}
                  >
                    {item.login}
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
export default Followers;
