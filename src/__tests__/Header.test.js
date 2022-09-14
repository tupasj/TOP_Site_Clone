import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from "../components/Header/Header";

test("renders correctly", () => {
  const { container } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});