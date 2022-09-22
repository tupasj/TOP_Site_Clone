/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import twitchAPI from "../../api/twitchAPI";

const LivestreamerInfo = () => {
  const [liveStreamerInfo, setLivestreamerInfo] = useState({});
  const [liveStreamInfo, setLivestreamInfo] = useState({});

  let params = useParams();
  let login = params.channelName;

  useEffect(() => {
    const getLivestreamerInfo = async () => {
      const liveStreamerInfoResponse = await twitchAPI.fetchLivestreamerInfo(
        login
      );
      setLivestreamerInfo(liveStreamerInfoResponse);
    };
    const getLivestreamInfo = async () => {
      const liveStreamInfoResponse = await twitchAPI.fetchLivestreamInfo(login);
      setLivestreamInfo(liveStreamInfoResponse);
    };
    getLivestreamerInfo();
    getLivestreamInfo();
  }, []);

  return (
    <>
      {liveStreamInfo && (
        <div className="livestreamer-info">
          <div className="livestreamer-info__image-container">
            <img
              className="livestreamer-info__image-container__profile-picture"
              src={liveStreamerInfo.profile_image_url}
              alt={`${login}'s profile picture`}
            ></img>
            <span className="livestreamer-info__image-container__live-notice">
              LIVE
            </span>
          </div>
          <div className="livestreamer-info__info">
            <span className="livestreamer-info__info__streamer-name">
              {liveStreamerInfo.display_name}
            </span>
            <span className="livestreamer-info__info__stream-title">
              {liveStreamInfo.title}
            </span>
            <span className="livestreamer-info__info__game-name">
              {liveStreamInfo.game_name}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export { LivestreamerInfo };
