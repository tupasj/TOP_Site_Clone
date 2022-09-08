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
  await expect(twitchAPI.fetchStreams()).resolves.toEqual(mockResponses.streams);
});
