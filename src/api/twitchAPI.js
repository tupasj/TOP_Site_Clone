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
};

const fetchTopGames = async (quantity) => {
  const topGames = await authInstance.get(`https://api.twitch.tv/helix/games/top?first=${quantity}`);
  return topGames;
};

const fetchTopClipsInfo = async () => {
  const topGamesResponse = await fetchTopGames(10);
  const topGamesArray = topGamesResponse.data.data;
  const topGamesID = topGamesArray.map(item => item.id);
  const clips = [];
  for (let i = 0; i < 5; i++) {
    const clipResponse = await authInstance.get(`https://api.twitch.tv/helix/clips?game_id=${topGamesID[i]}&first=1`);
    const clip = clipResponse.data.data[0];
    clips.push(clip);
  };
  return clips;
};

const fetchTopGameStreamsInfo = async (quantity) => {
  const topGamesResponse = await fetchTopGames(10);
  const topGamesArray = topGamesResponse.data.data;
  const topGamesID = topGamesArray.map(item => item.id);

  const addThumbnailSize = (thumbnailURL) => thumbnailURL.replace('{width}', '315').replace('{height}', '180');

  const stringifyTags = async (tagIDs) => {
    const stringifiedTags = [];
    for (let i = 0; i < tagIDs.length; i++) {
      const tagStringsResponse = await authInstance.get(`https://api.twitch.tv/helix/tags/streams?tag_id=${tagIDs[i]}`)
      const tagString = tagStringsResponse.data.data[0].localization_names["en-us"];
      stringifiedTags.push(tagString);
    }
    return stringifiedTags;
  };
  
  const topGamesStreams = [];
  if (quantity) {
    for (let i = 0; i < quantity; i++) {
      const topGameStreamsResponse = await authInstance.get(`https://api.twitch.tv/helix/streams?game_id=${topGamesID[i]}&first=10`);
      const topGameInfoObjectArray = [];
      for (let j = 0; j < topGamesID.length; j++) {
        const topGameStream = topGameStreamsResponse.data.data[j];
        const adjustedThumbnail = addThumbnailSize(topGameStream.thumbnail_url);
        const userPicResponse = await fetchUsers(topGameStream.user_login);
        const userPic = userPicResponse.data.data[0].profile_image_url;
        const stringifiedTags = await stringifyTags(topGameStream.tag_ids);
    
        const topGameInfoObject = {
          gameName: topGameStream.game_name,
          thumbnail: adjustedThumbnail,
          streamTitle: topGameStream.title,
          streamerLogin: topGameStream.user_login,
          streamerName: topGameStream.user_name,
          streamerProfilePic: userPic,
          tags: stringifiedTags,
          viewerCount: topGameStream.viewer_count,
        };
        topGameInfoObjectArray.push(topGameInfoObject);
      }
      topGamesStreams.push(topGameInfoObjectArray);
    }
  } else {
    for (let i = 0; i < topGamesID.length; i++) {
      const topGameStreamsResponse = await authInstance.get(`https://api.twitch.tv/helix/streams?game_id=${topGamesID[i]}`);
      const topGameStream = topGameStreamsResponse.data.data[0];
  
      const adjustedThumbnail = addThumbnailSize(topGameStream.thumbnail_url);
      const userPicResponse = await fetchUsers(topGameStream.user_login);
      const userPic = userPicResponse.data.data[0].profile_image_url;
      const stringifiedTags = await stringifyTags(topGameStream.tag_ids);
  
      const topGameInfoObject = {
        gameName: topGameStream.game_name,
        thumbnail: adjustedThumbnail,
        streamTitle: topGameStream.title,
        streamerLogin: topGameStream.user_login,
        streamerName: topGameStream.user_name,
        streamerProfilePic: userPic,
        tags: stringifiedTags,
        viewerCount: topGameStream.viewer_count,
      };
      topGamesStreams.push(topGameInfoObject);
    };
  };

  return topGamesStreams;
};

const fetchTopCategories = async () => {
  const topCategoriesResponse = await fetchTopGames(10);
  const topCategoriesArray = topCategoriesResponse.data.data;
  const addThumbnailSize = (thumbnailURL) => thumbnailURL.replace('{width}', '150').replace('{height}', '200');

  const topCategoriesInfoArray = [];
  for (let i = 0; i < topCategoriesArray.length; i++) {
    const sizedImg = addThumbnailSize(topCategoriesArray[i].box_art_url);
    const topCategoryInfoObj = {
      title: topCategoriesArray[i].name,
      img: sizedImg,
    };
    topCategoriesInfoArray.push(topCategoryInfoObj);
  };

  return topCategoriesInfoArray;
};

const fetchUserByID = async (ID) => {
  const userResponse = await authInstance.get(`https://api.twitch.tv/helix/users?id=${ID}`);
  const user = userResponse.data.data[0];
  return user;
};

const fetchLivestreamerInfo = async (userLogin) => {
  const userInfoResponse = await authInstance.get(`https://api.twitch.tv/helix/users?login=${userLogin}`);
  const userInfo = userInfoResponse.data.data[0];
  return userInfo;
};

const fetchLivestreamInfo = async (userLogin) => {
  const streamsResponse = await authInstance.get(`https://api.twitch.tv/helix/streams?user_login=${userLogin}`);
  const streams = streamsResponse.data.data[0];
  return streams;
}

const twitchAPI = {
  fetchUsers: fetchUsers,
  fetchStreams: fetchStreams,
  fetchTopUsersInfo: fetchTopUsersInfo,
  fetchCategories: fetchCategories,
  fetchTopGames: fetchTopGames,
  fetchTopClipsInfo: fetchTopClipsInfo,
  fetchTopGameStreamsInfo: fetchTopGameStreamsInfo,
  fetchTopCategories: fetchTopCategories,
  fetchUserByID: fetchUserByID,
  fetchLivestreamerInfo: fetchLivestreamerInfo,
  fetchLivestreamInfo
};

export default twitchAPI;
