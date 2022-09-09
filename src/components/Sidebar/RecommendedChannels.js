import twitchAPI from "../../api/twitchAPI";
import { useState, useEffect } from "react";

const RecommendedChannels = () => {
  const [topUsersInfo, setTopUsersInfo] = useState({});

  useEffect(() => {
    const getTopUsersInfo = async () => {
      const topUsersInfoArray = await twitchAPI.fetchTopUsersInfo();
      setTopUsersInfo(topUsersInfoArray);
    };
    getTopUsersInfo();
  }, []);

  return (
    <div className="recommended-channels">
      {topUsersInfo[0] && (
        <div className="recommended-channel">{topUsersInfo[0].name}</div>
      )}
    </div>
  );
};

export { RecommendedChannels };
