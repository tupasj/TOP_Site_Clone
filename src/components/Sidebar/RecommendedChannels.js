/* eslint-disable jsx-a11y/img-redundant-alt */
import twitchAPI from "../../api/twitchAPI";
import { useState, useEffect } from "react";
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
      {/* Renders children whenever topUsersInfo state is a non-empty array */}
      {topUsersInfo[0] &&
        topUsersInfo.map((item) => {
          return (
            <div key={item.name} className="recommended-channel">
              <div className="recommended-channel__section--plain">
                <img
                  className="recommended-channel__img"
                  src={item.img}
                  alt="user picture"
                ></img>
              </div>
              <div className="recommended-channel__section--vertical">
                <span className="recommended-channel__name">{item.name}</span>
                <span className="recommended-channel__game-name--center">
                  {item.currentlyPlaying}
                </span>
              </div>
              <div className="recommended-channel__section">
                <i className="recommended-channel__icon--circle fa-solid fa-circle"></i>
                <span className="recommended-channel__viewer-count">{formatViewerCount(item.viewerCount)}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export { RecommendedChannels };
