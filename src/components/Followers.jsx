import { Link } from "react-router-dom";

const Followers = ({ followers, fetchfollowerRepo }) => {
  console.log("followers", followers);
  return (
    <>
      <p>Hi from followers</p>
      {followers.map((item) => {
        console.log("map called");
        return (
          <div>
            <Link to="/" onClick={() => fetchfollowerRepo(item.login)}>
              {item.login}
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default Followers;
