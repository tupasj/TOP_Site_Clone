import "./styles.scss";
// import axios from "axios";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  // const twitchAPI = axios.create({
  //   headers: {
  //     Authorization: "Bearer veemgsu384i20g5yp8yjrb04198zlz",
  //     "Client-Id": "95n6aprvq0p87raezjptqic51b6944",
  //   },
  // });

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export { App };
