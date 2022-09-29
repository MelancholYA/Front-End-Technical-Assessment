import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Pages/Create";
import Event from "./Pages/Event";
import Home from "./Pages/Home";
import "./styles/Main.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/create"
            element={<Create />}
          />
          <Route
            path="/event"
            element={<Event />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
