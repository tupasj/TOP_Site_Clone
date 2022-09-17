import { useState, useEffect } from "react";
import twitchAPI from "../../api/twitchAPI";

const TopChannels = () => {
  const [ topChannels, setTopChannels ] = useState([]);

  useEffect(() => {
    const getTopChannels = async () => {
      const streamsInfo = await twitchAPI.fetchTopGameStreamsInfo();
      setTopChannels(streamsInfo);
    }
    getTopChannels();
  }, []);

  return (
    <article className="category">
      <h2 className="category__title">Top channels</h2>
      {topChannels[0] &&
      <>
      <div className="category__content">Top channels content</div>
      </>}
    </article>
  );
};

export { TopChannels };
