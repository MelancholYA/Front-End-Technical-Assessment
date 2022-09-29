import { Link } from "react-router-dom";
import create from "../assets/create.jpg";
const Create = () => {
  return (
    <div
      className="create"
      style={{ background: `url(${create})`, backgroundSize: "cover" }}
    >
      <h1 className="create_title">Create Your Event</h1>

      <div className="create_inputs">
        <input
          type="text"
          placeholder="event name"
        />
        <input
          type="text"
          placeholder="event host"
        />
        <input
          type="datetime-local"
          name=""
          id=""
        />
        <input
          type="datetime-local"
          name=""
          id=""
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="location"
        />
        <input
          onChange={(e) => console.log(e)}
          type="file"
        />
        <Link
          to="/event"
          className="create_inputs_cta"
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Create;
