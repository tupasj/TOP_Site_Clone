import { FeaturedLivestream } from "../../components/Livestreams";
import { TopChannels, TopCategories, CategoryTags, Streams, Clips } from "../../components/Categories";

const Home = () => {
  return (
    <>
      <FeaturedLivestream />
      <TopChannels />
      <TopCategories  />
      <CategoryTags />
      {/* Streams x4 */}
      <Streams />
      <Clips />
    </>
  );
};

export { Home };
