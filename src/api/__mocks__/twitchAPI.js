import { mockResponses } from "../mockResponses/mockResponses";

const fetchUsers = async () => {
  let promiseObj = new Promise((resolve) => {
    resolve(mockResponses.users)
  });
  const users = await promiseObj;
  return users;
};

const fetchStreams = async () => {
  let promiseObj = new Promise((resolve) => {
    resolve(mockResponses.streams)
  });
  const streams = await promiseObj;
  return streams;
};

const twitchAPI = {
  fetchUsers: fetchUsers,
  fetchStreams: fetchStreams,
};

export default twitchAPI;
