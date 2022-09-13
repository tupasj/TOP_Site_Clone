import "./styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserChannel } from "./pages/Home";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="page-wrapper home">
        <Header />
        <Sidebar />
        <main>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/channel/:channelName" element={<UserChannel />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export { App };
