import { mockResponses } from "../mockResponses/mockResponses";

const fetchUsers = async () => {
  let promiseObj = new Promise((resolve) => {
    resolve(mockResponses.users);
  });
  const users = await promiseObj;
  return users;
};

const fetchStreams = async () => {
  let promiseObj = new Promise((resolve) => {
    resolve(mockResponses.streams);
  });
  const streams = await promiseObj;
  return streams;
};

const fetchTopUsersInfo = async () => {
  let promiseObj = new Promise((resolve) => {
    resolve(mockResponses.topUsersInfo);
  });
  const topUsersInfo = await promiseObj;
  return topUsersInfo;
};

const fetchCategories = async () => {
  let promiseObj = new Promise((resolve) => {
    resolve(mockResponses.categories);
  });
  const categories = await promiseObj;
  return categories;
};

const twitchAPI = {
  fetchUsers: fetchUsers,
  fetchStreams: fetchStreams,
  fetchTopUsersInfo: fetchTopUsersInfo,
  fetchCategories: fetchCategories,
};

export default twitchAPI;
