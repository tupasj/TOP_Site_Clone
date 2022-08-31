import './App.scss';
import "./App.scss";
import axios from 'axios';

const App = () => {
const twitchAPI = axios.create({
  headers: {
    'Authorization': 'Bearer veemgsu384i20g5yp8yjrb04198zlz',
    'Client-Id': '95n6aprvq0p87raezjptqic51b6944'
  }
});

// twitchAPI.get('https://api.twitch.tv/helix/users?login=twitchdev')
// .then(function (response) {
//   console.log(response.data.data[0].created_at);
// })
// .catch(function (error) {
//   console.log(error);
// });

const getUserInfo = async () => {
  try {
    const userInfo = await twitchAPI.get('https://api.twitch.tv/helix/users?login=twitchdev');
    return userInfo;
  }
  catch (error) {
    console.log(error);
  };
};

const printUserInfo = async () => {
  const userInfo = await getUserInfo();
  console.log(userInfo.data.data[0].created_at);
};

printUserInfo();

  // const jsonData = {
  //   data: [
  //     {
  //       id: "141981764",
  //       login: "twitchdev",
  //       display_name: "TwitchDev",
  //       type: "",
  //       broadcaster_type: "partner",
  //       description:
  //         "Supporting third-party developers building Twitch integrations from chatbots to game integrations.",
  //       profile_image_url:
  //         "https://static-cdn.jtvnw.net/jtv_user_pictures/8a6381c7-d0c0-4576-b179-38bd5ce1d6af-profile_image-300x300.png",
  //       offline_image_url:
  //         "https://static-cdn.jtvnw.net/jtv_user_pictures/3f13ab61-ec78-4fe6-8481-8682cb3b0ac2-channel_offline_image-1920x1080.png",
  //       view_count: 19044088,
  //       created_at: "2016-12-14T20:32:28Z",
  //     },
  //   ],
  // };
  // console.log("jsonData: ");
  // console.log(jsonData);
  // console.log("login string:");
  // console.log(jsonData.data[0].login);

  return (
    <>
    <p>lorem ipsum</p>
    {/* <img src={jsonData.data[0].profile_image_url} alt="profile url"></img> */}
    </>
  );
};

export { App };
