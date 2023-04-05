import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/repo.css";
import Loader from "./loader";
import * as dotenv from "dotenv"
dotenv.config()

const Repo = ({ setLoading, loading }) => {
  const [repoDetails, setRepoDetails] = useState({});

  const { id, name } = useParams();
  console.log("hi", id, name);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/repos/${id}/${name}`, {
      headers: {
        Authorization: process.env.Authorization,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setRepoDetails(data);
        setLoading(false);
      });
  }, [id, name]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="repodetails-page">
          <h1>I m from repo</h1>
          <h1>{repoDetails.id}</h1>
          <p>{repoDetails.name}</p>
          {/* <p>{repoDetails.description ? "" : "Not Applicable"}</p> */}
          <p>{repoDetails.visibility}</p>
        </div>
      )}
    </>
  );
};
export default Repo;
