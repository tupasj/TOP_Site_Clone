import { useState, useEffect } from "react";
import twitchAPI from "../../api/twitchAPI";
import { ContentRow } from "./ContentRow";
import { Divider } from "../UI/Divider.js";
import { ShowMore } from "../UI/ShowMore.js";

const TopChannels = () => {
  const [topChannels, setTopChannels] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const showMoreContent = () => {
    setShowMore(true);
  };

  useEffect(() => {
    const getTopChannels = async () => {
      const streamsInfo = await twitchAPI.fetchTopGameStreamsInfo();
      setTopChannels(streamsInfo);
    };
    getTopChannels();
  }, []);

  return (
    <article className="top-channels">
      <h2 className="top-channels__title">
        Live channels we think you'll like
      </h2>
      {topChannels[0] && <ContentRow contentArray={topChannels} rowNum={1} />}
      {showMore ? (
        <>
          {<ContentRow contentArray={topChannels} rowNum={2} />}
          <Divider />
        </>
      ) : (
        <ShowMore onClick={showMoreContent} />
      )}
    </article>
  );
};

export { TopChannels };
