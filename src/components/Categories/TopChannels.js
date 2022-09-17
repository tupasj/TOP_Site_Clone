/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";
import twitchAPI from "../../api/twitchAPI";

const TopChannels = () => {
  const [ topChannels, setTopChannels ] = useState([]);

  useEffect(() => {
    const getTopChannels = async () => {
      const streamsInfo = await twitchAPI.fetchTopGameStreamsInfo();
      setTopChannels(streamsInfo);
      console.log(topChannels);
    }
    getTopChannels();
  }, []);

  return (
    <article className="top-channels">
      <h2 className="top-channels__title">Live channels we think you'll like</h2>
      {topChannels[0] &&
      <div className="top-channels__content">
        <div className="top-channel__content">
          <img className="top-channel__content__img" src={topChannels[0].thumbnail} alt="stream thumbnail"></img>
          <div className="top-channel__content__info">
            <div className="top-channel__content__info--left">
              <img className="top-channel__content__info__streamer-pic" src={topChannels[0].streamerProfilePic} alt="profile image"></img>
            </div>
            <div className="top-channel__content__info--right">
              <span className="top-channel__content__info__title">{topChannels[0].streamTitle}</span>
              <span className="top-channel__content__info__username">{topChannels[0].streamerName}</span>
              <span className="top-channel__content__info__game-name">{topChannels[0].gameName}</span>
            </div>
          </div>
        </div>
      </div>
      }
      <div className="top-channels__show-more"></div>
    </article>
  );
};

export { TopChannels };
