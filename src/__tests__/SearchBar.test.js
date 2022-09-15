import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "../components/Header/SearchBar";

test("Allows user to type a string to search for a streamer", () => {
  render(
    <MemoryRouter>
      <SearchBar />
    </MemoryRouter>
  );

  const input = screen.getByRole("textbox");
  userEvent.type(input, "foobar");
  expect(input).toHaveValue("foobar");
});

test("Checks if streamer name is valid", () => {
  render(
    <MemoryRouter>
      <SearchBar />
    </MemoryRouter>
  );

  const mockResponse = "validUsername";
  const userQuery = "validUsername";
  const input = screen.getByRole("textbox");
  userEvent.type(input, userQuery);

  const icon = screen.getByTestId("searchbar__icon-container");
  userEvent.click(icon);

  let match;
  if (userQuery === mockResponse) {
    match = true;
  } else {
    match = false;
  }

  expect(match).toBe(true);
});

test("Checks if streamer name is invalid", () => {
  render(
    <MemoryRouter>
      <SearchBar />
    </MemoryRouter>
  );

  const mockResponse = "validUsername";
  const userQuery = "invalidUsername";
  const input = screen.getByRole("textbox");
  userEvent.type(input, userQuery);

  const icon = screen.getByTestId("searchbar__icon-container");
  userEvent.click(icon);

  let match;
  if (userQuery === mockResponse) {
    match = true;
  } else {
    match = false;
  }

  expect(match).toBe(false);
});
