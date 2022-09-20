import { useState, useEffect } from "react";
import twitchAPI from "../../api/twitchAPI";
import { FeaturedLivestream } from "../../components/Livestreams";
import {
  TopChannels,
  TopCategories,
  CategoryTags,
  Streams,
  Clips,
} from "../../components/Categories";

const Home = () => {
  const [topGamesStreams, setTopGamesStreams] = useState([]);

  useEffect(() => {
    const getTopGamesStreams = async () => {
      const topGamesStreamsArray = await twitchAPI.fetchTopGameStreamsInfo(3);
      setTopGamesStreams(topGamesStreamsArray);
    };
    getTopGamesStreams();
  }, []);

  return (
    <>
      <FeaturedLivestream />
      <TopChannels />
      <TopCategories />
      <CategoryTags />
      {topGamesStreams[0] && (
        <>
          <Streams
            title={`Recommended ${topGamesStreams[0][0].gameName} channels`}
            contents={topGamesStreams[0]}
          />
          <Streams
            title={`Recommended ${topGamesStreams[1][0].gameName} channels`}
            contents={topGamesStreams[1]}
          />
        </>
      )}
      <Clips />
    </>
  );
};

export { Home };
