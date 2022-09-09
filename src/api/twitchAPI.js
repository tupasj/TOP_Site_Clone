import axios from "axios";

const authInstance = axios.create({
  headers: {
    "Authorization": "Bearer veemgsu384i20g5yp8yjrb04198zlz",
    "Client-Id": "95n6aprvq0p87raezjptqic51b6944",
  },
});

const fetchUsers = async (username) => {
  const users = await authInstance.get(`https://api.twitch.tv/helix/users?login=${username}`);
  return users;
};

const fetchStreams = async () => {
  const streams = await authInstance.get("https://api.twitch.tv/helix/streams?first=10");
  return streams;
};

const fetchTopUsersInfo = async () => {
  const streams = await fetchStreams();
  const streamsArray = streams.data.data;
  // console.log('streamsArray: ');
  // console.log(streamsArray);
  const userInfoArray = [];
  for (let i = 0; i < streamsArray.length; i++) {
    const userInfo = await fetchUsers(streamsArray[i].user_login);
    userInfoArray.push(userInfo.data.data[0]);
  };
  // console.log('userInfoArray: ');
  // console.log(userInfoArray);
  const topUsersArray = [];
  for (let i = 0; i < streamsArray.length; i++) {
    const topUserInfo = {
      img: userInfoArray[i].profile_image_url,
      name: userInfoArray[i].display_name,
      currentlyPlaying: streamsArray[i].game_name,
      viewerCount: streamsArray[i].viewer_count
    };
    topUsersArray.push(topUserInfo);
  };
  console.log('topUsersArray: ');
  console.log(topUsersArray);

  return topUsersArray;
};

const twitchAPI = {
  fetchUsers: fetchUsers,
  fetchStreams: fetchStreams,
  fetchTopUsersInfo: fetchTopUsersInfo
};

export default twitchAPI;
