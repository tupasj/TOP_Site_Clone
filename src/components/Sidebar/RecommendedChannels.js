/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import twitchAPI from "../../api/twitchAPI";
import { formatViewerCount } from "../../utils/formatNums";

const RecommendedChannels = () => {
  const [topUsersInfo, setTopUsersInfo] = useState({});

  // Fetch data from API after initial render and then update state with the response
  useEffect(() => {
    const getTopUsersInfo = async () => {
      const topUsersInfoArray = await twitchAPI.fetchTopUsersInfo();
      setTopUsersInfo(topUsersInfoArray);
    };
    getTopUsersInfo();
  }, []);

  return (
    <div className="recommended-channels">
      {/* Renders channel info whenever topUsersInfo state is a non-empty array */}
      {topUsersInfo[0] &&
        topUsersInfo.map((channel) => {
          return (
            <Link key={channel.name} to={`/channel/${channel.name}`}>
              <div className="recommended-channel">
                <div className="recommended-channel__section--plain">
                  <img
                    className="recommended-channel__img"
                    src={channel.img}
                    alt="user picture"
                  ></img>
                </div>
                <div className="recommended-channel__section--vertical">
                  <span className="recommended-channel__name">
                    {channel.name}
                  </span>
                  <span className="recommended-channel__game-name--center">
                    {channel.currentlyPlaying}
                  </span>
                </div>
                <div className="recommended-channel__section">
                  <i className="recommended-channel__icon--circle fa-solid fa-circle"></i>
                  <span className="recommended-channel__viewer-count">
                    {formatViewerCount(channel.viewerCount)}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export { RecommendedChannels };
