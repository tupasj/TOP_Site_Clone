import "./styles.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserChannel } from "./pages/Channel/UserChannel";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { UserNotFound } from "./pages/Error/UserNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Header />
        <Sidebar />
        <main>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/channel/:channelName" element={<UserChannel />} />
            <Route path="/error" element={<UserNotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export { App };
