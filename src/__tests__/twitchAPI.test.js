import twitchAPI from "../api/twitchAPI";
import { mockResponses } from "../api/mockResponses/mockResponses";

jest.mock('../api/twitchAPI.js');

afterEach(() => {
    jest.restoreAllMocks();
});

test("fetches users", () => {
  expect(twitchAPI.fetchUsers()).toEqual(mockResponses.users);
});

test("fetches streams", () => {
  expect(twitchAPI.fetchStreams()).toEqual(mockResponses.streams);
});
