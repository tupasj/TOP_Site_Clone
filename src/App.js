import "./App.scss";
import axios from "axios";

const App = () => {
  const twitchAPI = axios.create({
    headers: {
      Authorization: "Bearer veemgsu384i20g5yp8yjrb04198zlz",
      "Client-Id": "95n6aprvq0p87raezjptqic51b6944",
    },
  });

  const getUserInfo = async () => {
    try {
      const userInfo = await twitchAPI.get(
        "https://api.twitch.tv/helix/users?login=twitchdev"
      );
      return userInfo;
    } catch (error) {
      console.log(error);
    }
  };

  const printUserInfo = async () => {
    const userInfo = await getUserInfo();
    console.log(userInfo.data.data[0].created_at);
  };

  printUserInfo();

  return (
    <>
      <p>lorem ipsum</p>
      {/* <iframe
        title="twitch video player"
        src="https://player.twitch.tv/?channel=zackrawrr&parent=localhost&muted=true"
        height="720"
        width="1280"
        allowfullscreen
      ></iframe> */}
      {/* <iframe
        title="twitch chat box"
        src="https://www.twitch.tv/embed/zackrawrr/chat?parent=localhost"
        height="500"
        width="350"
      ></iframe> */}
    </>
  );
};

export { App };
