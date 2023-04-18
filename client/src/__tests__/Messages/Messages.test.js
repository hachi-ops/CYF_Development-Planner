import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import MessagesControls from "../../components/dashboard/controls/MessagesControls";

// renders MessagesControls component
test("should render MessagesControls component", () => {
  render(<MessagesControls />);
  const messagesControls = screen.getByTestId("messages-controls");
  expect(messagesControls).toBeInTheDocument();
});

// renders buttons
test("should render buttons", () => {
  render(<MessagesControls />);
  const all = screen.getByRole("button", { name: /all/i });
  expect(all).toBeInTheDocument();

  const sent = screen.getByRole("button", { name: /sent/i });
  expect(sent).toBeInTheDocument();

  const unread = screen.getByRole("button", { name: /unread/i });
  expect(unread).toBeInTheDocument();
});
