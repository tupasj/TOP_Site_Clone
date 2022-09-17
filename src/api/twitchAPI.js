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

const fetchStreams = async (quantity) => {
  const streams = await authInstance.get(`https://api.twitch.tv/helix/streams?first=${quantity}`);
  return streams;
};

const fetchTopUsersInfo = async () => {
  const makeStreamsArray = async () => {
    const streamsResponse = await fetchStreams(10);
    const streamsArray = streamsResponse.data.data;
    return streamsArray;
  };

  const makeUserInfoArray = async () => {
    const userInfoArray = [];
    for (let i = 0; i < streamsArray.length; i++) {
      const userInfo = await fetchUsers(streamsArray[i].user_login);
      userInfoArray.push(userInfo.data.data[0]);
    };
    return userInfoArray;
  };
  
  const makeTopUsersArray = () => {
    const topUsersArray = [];
    for (let i = 0; i < streamsArray.length; i++) {
      const topUserInfo = {
        img: userInfoArray[i].profile_image_url,
        name: userInfoArray[i].display_name,
        login: userInfoArray[i].login,
        currentlyPlaying: streamsArray[i].game_name,
        viewerCount: streamsArray[i].viewer_count
      };
      topUsersArray.push(topUserInfo);
    };
    return topUsersArray;
  };

  const streamsArray = await makeStreamsArray();
  const userInfoArray = await makeUserInfoArray(streamsArray);
  const topUsersArray = makeTopUsersArray(userInfoArray);

  return topUsersArray;
};

const fetchCategories = async (category, quantity) => {
  const categories = await authInstance.get(`https://api.twitch.tv/helix/search/categories?query=${category}&first=${quantity}`);
  return categories;
}

const fetchTopGames = async (quantity) => {
  const topGames = await authInstance.get(`https://api.twitch.tv/helix/games/top?first=${quantity}`);
  return topGames;
}

const fetchTopClips = async () => {
  const topGamesResponse = await fetchTopGames(10);
  const topGamesArray = topGamesResponse.data.data;
  const topGamesID = topGamesArray.map(item => item.id);
  const clips = [];
  for (let i = 0; i < topGamesID.length; i++) {
    const clipResponse = await authInstance.get(`https://api.twitch.tv/helix/clips?game_id=${topGamesID[i]}&first=1`);
    const clip = clipResponse.data.data[0];
    clips.push(clip);
  };
  return clips;
}

// Can probably refactor most of the structure in fetchTopClips() into its own reusable function for 'fetchTOP' functions
// Can probably change fetchStreams to accept a search by ID parameter
const fetchTopGameStreams = async () => {
  // get top games -> get streams
  const topGamesResponse = await fetchTopGames(10);
  const topGamesArray = topGamesResponse.data.data;
  const topGamesID = topGamesArray.map(item => item.id);
  const topGamesStreams = [];
  for (let i = 0; i < topGamesID.length; i++) {
    const topGameStreamResponse = await fetchStreams(1);
  }
}

const fetchTopCategoryStreams = async () => {
  // get category -> get streams
  const categoryResponse = await fetchCategories('just chatting', 1);
}

const twitchAPI = {
  fetchUsers: fetchUsers,
  fetchStreams: fetchStreams,
  fetchTopUsersInfo: fetchTopUsersInfo,
  fetchCategories: fetchCategories,
  fetchTopGames: fetchTopGames,
  fetchTopClips: fetchTopClips
};

export default twitchAPI;
