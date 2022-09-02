import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { FeaturedLivestream } from "../../components/Streams";
import { Categories } from "../../components/Categories";

const Home = () => {
  return (
    <div className="page-wrapper home">
      <Header />
      <Sidebar />
      <main>
        <FeaturedLivestream />
        <Categories />
      </main>
    </div>
  );
};

export { Home };