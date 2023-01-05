import { Link } from "react-router-dom";

const Followers = ({ followers, fetchfollowerRepo, username }) => {
  console.log("followers", followers);
  return (
    <>
      <p>Hi from followers</p>
      {followers.map((item) => {
        console.log("map called");
        return (
          <div>
            <Link
              to={`/username/${username}`}
              onClick={() => fetchfollowerRepo(item.login)}
            >
              {item.login}
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default Followers;
