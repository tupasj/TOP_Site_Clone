import axios from "axios";

const fetchUsers = async () => {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");
  return users;
};

const fetchStreams = async () => {
  // Just test for the raw/arguement-less response. So the test still works even if parameters change.
  const streams = await axios.get("https://api.twitch.tv/helix/streams");
  return streams;
};

const twitchAPI = {
  fetchUsers: fetchUsers,
  fetchStreams: fetchStreams
};

export default twitchAPI;