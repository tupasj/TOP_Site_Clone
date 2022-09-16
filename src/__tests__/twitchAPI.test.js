import twitchAPI from "../api/twitchAPI";
import { mockResponses } from "../api/mockResponses/mockResponses";

jest.mock('../api/twitchAPI.js');

afterEach(() => {
    jest.restoreAllMocks();
});

test("fetches users", async () => {
  expect.assertions(1);
  await expect(twitchAPI.fetchUsers()).resolves.toEqual(mockResponses.users);
});

test("fetches streams", async () => {
  expect.assertions(1);
  await expect(twitchAPI.fetchStreams(10)).resolves.toEqual(mockResponses.streams);
});

test("fetches topUsersInfo", async () => {
  expect.assertions(1);
  await expect(twitchAPI.fetchTopUsersInfo()).resolves.toEqual(mockResponses.topUsersInfo);
});

test("fetches categories", async () => {
  expect.assertions(1);
  await expect(twitchAPI.fetchCategories('just chatting', 1)).resolves.toEqual(mockResponses.categories);
});
