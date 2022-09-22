import "./styles.scss";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserChannel } from "./pages/Channel/UserChannel";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { UserNotFound } from "./pages/Error/UserNotFound";
import { URLNotFound } from "./pages/Error/URLNotFound";

const App = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <Sidebar />
      <main>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/channel/:channelName" element={<UserChannel />} />
          <Route path="/error" element={<UserNotFound />} />
          <Route path="*" element={<URLNotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export { App };
