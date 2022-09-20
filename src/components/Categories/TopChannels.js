/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import twitchAPI from "../../api/twitchAPI";
import { formatViewerCount } from "../../utils/formatNums";
import { Divider } from "../UI/Divider.js";
import { ShowMore } from "../UI/ShowMore.js";

const TopChannels = () => {
  const [topChannels, setTopChannels] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const contentRow = (contentArray, rowNum) => {
    const contentRowArray = [];
    // If row 1 use first half of content
    if (rowNum === 1) {
      for (let i = 0; i < contentArray.length / 2; i++) {
        contentRowArray.push(contentArray[i]);
      }
    } else if (rowNum === 2) {
      // If row 2 use second half of content
      for (let i = contentArray.length / 2; i < contentArray.length; i++) {
        contentRowArray.push(contentArray[i]);
      }
    }

    return (
      <div className="top-channels__content">
        {contentRowArray.map((item) => {
          return (
            <div key={item.streamerName} className="top-channel__content">
              <div className="top-channel__content__thumbnail-container">
                <Link
                  to={`/channel/${item.streamerLogin}`}
                >
                  <img
                    className="top-channel__content__thumbnail-container__thumbnail"
                    src={item.thumbnail}
                    alt="stream thumbnail"
                  ></img>
                </Link>
                <span className="top-channel__content__thumbnail-container__live-notice">
                  LIVE
                </span>
                <span className="top-channel__content__thumbnail-container__viewer-count">
                  {formatViewerCount(item.viewerCount)} viewers
                </span>
              </div>
              <div className="top-channel__content__info">
                <div className="top-channel__content__info--left">
                  <img
                    className="top-channel__content__info__streamer-pic"
                    src={item.streamerProfilePic}
                    alt="profile image"
                  ></img>
                </div>
                <div className="top-channel__content__info--right">
                  <span className="top-channel__content__info__title">
                    {item.streamTitle}
                  </span>
                  <span className="top-channel__content__info__username">
                    {item.streamerName}
                  </span>
                  <span className="top-channel__content__info__game-name">
                    {item.gameName}
                  </span>
                  <div className="top-channel__content__info__tags">
                    {item.tags.map((tag) => {
                      return (
                        <span key={tag} className="top-channel__content__info__tag">
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

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
      {topChannels[0] && contentRow(topChannels, 1)}
      {showMore ? (
        <>
          {contentRow(topChannels, 2)}
          <Divider />
        </>
      ) : (
        <ShowMore onClick={showMoreContent} />
      )}
    </article>
  );
};

export { TopChannels };