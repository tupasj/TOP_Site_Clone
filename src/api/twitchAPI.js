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

const twitchAPI = {
  fetchUsers: fetchUsers,
  fetchStreams: fetchStreams
};

export default twitchAPI;
