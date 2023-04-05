import { MrMiyagi } from "@uiball/loaders";
import "../assets/loader.css";
import "../assets/home.css";

const Loader = () => {
  return (
    <div className="body">
      <h1 className="load-description header">
        Fetching results on your search
      </h1>
      <MrMiyagi className={"logo"} color={"#388a79"} />
    </div>
  );
};
export default Loader;
