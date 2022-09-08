import { render, screen } from "@testing-library/react";
import { Sidebar } from "../components/Sidebar/Sidebar";

test("renders heading text", () => {
  render(<Sidebar />);
  const sidebarTitle = screen.getByTestId("sidebar-title");
  const expectedText = "Recommended Channels";
  if (!(sidebarTitle.textContent === expectedText)) {
    throw new Error(`Component textContent does not match expected text\n
         Expected: ${expectedText}
         Received: ${sidebarTitle.textContent}`);
  };
  expect(sidebarTitle.textContent).toMatch(expectedText);
});
