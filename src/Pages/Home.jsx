import { Link } from "react-router-dom";
import hero from "../assets/lp.svg";
const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">
        Imagine if <span>Snapchat</span> had events.
      </h1>
      <p className="home_sub">
        Easily host and share events with your friends across any social media.
      </p>
      <img
        className="home_hero"
        src={hero}
        alt=""
      />
      <Link
        to="/create"
        className="home_cta"
      >
        🎉 Create my event
      </Link>
    </div>
  );
};

export default Home;
