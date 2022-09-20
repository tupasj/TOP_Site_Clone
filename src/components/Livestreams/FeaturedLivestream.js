/* eslint-disable jsx-a11y/iframe-has-title */
import { useState, useEffect } from "react";
import twitchAPI from "../../api/twitchAPI";

const FeaturedLivestream = () => {
  const [topUserName, setTopUserName] = useState("");

  useEffect(() => {
    const getTopUser = async () => {
      const topUserNameResponse = await twitchAPI.fetchTopUsersInfo();
      setTopUserName(topUserNameResponse[6].login);
    };
    getTopUser();
  }, []);

  return (
    <article className="featured-livestream">
      {topUserName && (
        <iframe
          data-testid="video-player"
          src={`https://player.twitch.tv/?channel=${topUserName}&parent=localhost`}
          height="360"
          width="1280"
          allowFullScreen
        ></iframe>
      )}
    </article>
  );
};

export { FeaturedLivestream };