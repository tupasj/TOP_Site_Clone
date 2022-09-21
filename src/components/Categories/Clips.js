/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/iframe-has-title */
import { useState, useEffect } from "react";
import twitchAPI from "../../api/twitchAPI";
import { formatDuration } from "../../utils/formatNums";
import { Modal } from "../UI/Modal";

const Clips = () => {
  const [topClipsInfo, setTopClipsInfo] = useState([]);
  const [imageURLs, setImageUrls] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalContent = () => {
    return (
      <iframe
        src="https://clips.twitch.tv/embed?clip=IncredulousAbstemiousFennelImGlitch&parent=localhost"
        height="360"
        width="640"
        allowFullScreen
      ></iframe>
    );
  };

  useEffect(() => {
    const getTopClipsInfo = async () => {
      const clipsInfoArray = await twitchAPI.fetchTopClipsInfo();
      setTopClipsInfo(clipsInfoArray);
      const imageURLsArray = [];
      for (let i = 0; i < 5; i++) {
        const userInfoResponse = await twitchAPI.fetchUserByID(
          clipsInfoArray[i].broadcaster_id
        );
        imageURLsArray.push(userInfoResponse.profile_image_url);
      }
      setImageUrls(imageURLsArray);
    };
    getTopClipsInfo();
  }, []);

  return (
    <article className="clips">
      <h2 className="clips__title">Clips we think you'll like</h2>
      <div className="clips__contents">
        {imageURLs[4] &&
          topClipsInfo.map((item, index) => {
            return (
              <div key={item.id} className="clips__content">
                <div
                  className="clips__content__thumbnail-container"
                  onClick={openModal}
                >
                  <img
                    className="clips__content__thumbnail-container__thumbnail"
                    src={item.thumbnail_url}
                    alt="stream thumbnail"
                  ></img>
                  <span className="clips__content__thumbnail-container__clip-duration">
                    {formatDuration(item.duration)}
                  </span>
                </div>
                <div className="clips__content__info">
                  <div className="clips__content__info--left">
                    <img
                      className="clips__content__info__streamer-pic"
                      src={imageURLs[index]}
                      alt="profile image"
                    ></img>
                  </div>
                  <div className="clips__content__info--right">
                    <span className="clips__content__info__title">
                      {item.title}
                    </span>
                    <span className="clips__content__info__broadcaster-name">
                      {item.broadcaster_name}
                    </span>
                    <span className="clips__content__info__creator-name">
                      {`Clipped by ${item.creator_name}`}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {modalIsOpen && (
        <Modal closeModal={closeModal}>
          {modalContent()}
        </Modal>
      )}
    </article>
  );
};

export { Clips };
