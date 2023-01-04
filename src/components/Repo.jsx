const Repo = ({ repoDetails }) => {
  console.log("repso", repoDetails);
  return (
    <>
      <h1>I m from repo</h1>
      <h1>{repoDetails.id}</h1>
      <p>{repoDetails.name}</p>
      <p>{repoDetails.description}</p>
    </>
  );
};
export default Repo;
