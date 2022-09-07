import { mockResponses } from "../mockResponses/mockResponses";

const fetchUsers = () => {
  return mockResponses.users;
};

const fetchStreams = () => {
  return mockResponses.streams;
};

const twitchAPI = {
  fetchUsers: fetchUsers,
  fetchStreams: fetchStreams,
};

export default twitchAPI;
