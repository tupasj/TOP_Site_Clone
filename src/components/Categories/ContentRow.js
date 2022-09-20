/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import { formatViewerCount } from "../../utils/formatNums";

const ContentRow = (props) => {
  const contentArray = props.contentArray;
  const rowNum = props.rowNum;

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
    <>
      {contentRowArray.map((item) => {
        return (
          <div key={item.streamerName} className="content-row__content">
            <div className="content-row__content__thumbnail-container">
              <Link to={`/channel/${item.streamerLogin}`}>
                <img
                  className="content-row__content__thumbnail-container__thumbnail"
                  src={item.thumbnail}
                  alt="stream thumbnail"
                ></img>
              </Link>
              <span className="content-row__content__thumbnail-container__live-notice">
                LIVE
              </span>
              <span className="content-row__content__thumbnail-container__viewer-count">
                {formatViewerCount(item.viewerCount)} viewers
              </span>
            </div>
            <div className="content-row__content__info">
              <div className="content-row__content__info--left">
                <img
                  className="content-row__content__info__streamer-pic"
                  src={item.streamerProfilePic}
                  alt="profile image"
                ></img>
              </div>
              <div className="content-row__content__info--right">
                <span className="content-row__content__info__title">
                  {item.streamTitle}
                </span>
                <span className="content-row__content__info__username">
                  {item.streamerName}
                </span>
                <span className="content-row__content__info__game-name">
                  {item.gameName}
                </span>
                <div className="content-row__content__info__tags">
                  {item.tags.map((tag) => {
                    return (
                      <span
                        key={tag}
                        className="content-row__content__info__tag"
                      >
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
    </>
  );
};

export { ContentRow };
