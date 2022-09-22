/* eslint-disable jsx-a11y/iframe-has-title */
import { useParams } from "react-router-dom";

const UserLivestream = () => {
  let params = useParams();

  return (
    <>
      <iframe
        data-testid="video-player"
        src={`https://player.twitch.tv/?channel=${params.channelName}&parent=site-clone-6db61.firebaseapp.com`}
        height="720"
        width="1280"
        allowFullScreen
      ></iframe>
      <iframe
        data-testid="chat-box"
        id="twitch-chat-embed"
        src={`https://www.twitch.tv/embed/${params.channelName}/chat?parent=site-clone-6db61.firebaseapp.com`}
        height="720"
        width="350"
      ></iframe>
    </>
  );
};

export { UserLivestream };
