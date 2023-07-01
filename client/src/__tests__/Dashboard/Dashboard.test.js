import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Dashboard from "../../components/dashboard/Dashboard";
import Logout from "../../components/dashboard/controls/Logout";
import DashboardNavigation from "../../components/dashboard/controls/DashboardNavigation";
import MessagesControls from "../../components/dashboard/controls/MessagesControls";
import DraftsControls from "../../components/dashboard/controls/DraftsControls";

// render Dashboard component
test("should render Dashboard component", () => {
  render(<Dashboard />);

  const dashboard = screen.getByTestId("dashboard");

  expect(dashboard).toBeInTheDocument();
});

// render Logout component
test("should render Logout component", () => {
  render(<Logout />);

  const logout = screen.getByTestId("logout");
  expect(logout).toBeInTheDocument();
});

// render DashboardNavigation component
test("should render DashboardNavigation component", () => {
  render(<DashboardNavigation />);

  const dashboardNavigation = screen.getByTestId("dashboard-navigation");
  expect(dashboardNavigation).toBeInTheDocument();
});

// render icons/icons captions
describe("should render: icons on dashboard, icons captions, open link on click of the icon, open link on click of the ico caption", () => {
  test("should render icons on dashboard", () => {
    render(<DashboardNavigation />);
    const filesIcon = screen.getByAltText("files icon");
    expect(filesIcon).toBeInTheDocument();

    const messagesIcon = screen.getByAltText("messages icon");
    expect(messagesIcon).toBeInTheDocument();

    const accountIcon = screen.getByAltText("account icon");
    expect(accountIcon).toBeInTheDocument();
  });

  test("should render icons captions", () => {
    render(<DashboardNavigation />);
    const filesCaption = screen.getByText("Files");
    expect(filesCaption).toBeInTheDocument();

    const messagesCaption = screen.getByText("Messages");
    expect(messagesCaption).toBeInTheDocument();

    const accountCaption = screen.getByText("Account");
    expect(accountCaption).toBeInTheDocument();
  });
});

// render DashboardNavigation buttons on click of Drafts and/or Messages
// renders DraftsControls component
test("should render DraftsControls component", () => {
  render(<DraftsControls />);
  const draftsControls = screen.getByTestId("drafts-controls");
  expect(draftsControls).toBeInTheDocument();
});

// renders drafts buttons
test("should render Drafts buttons", () => {
  render(<DraftsControls />);
  const allDrafts = screen.getByRole("button", { name: /drafts/i });
  expect(allDrafts).toBeInTheDocument();

  const newDraft = screen.getByRole("button", { name: /new/i });
  expect(newDraft).toBeInTheDocument();
});

// renders MessagesControls component
test("should render MessagesControls component", () => {
  render(<MessagesControls />);
  const messagesControls = screen.getByTestId("messages-controls");
  expect(messagesControls).toBeInTheDocument();
});

// renders messages buttons
test("should render Messages buttons", () => {
  render(<MessagesControls />);
  const all = screen.getByRole("button", { name: /all/i });
  expect(all).toBeInTheDocument();

  const sent = screen.getByRole("button", { name: /sent/i });
  expect(sent).toBeInTheDocument();

  const received = screen.getByRole("button", { name: /received/i });
  expect(received).toBeInTheDocument();
});

// renders DraftsList component on click of a button
// renders AddNewFile component on click of a button
// render drafts list in the DraftsList component
// renders Element component
// renders navigation buttons for each item in a DraftsList component
// renders EditDraft on click
// renders Delete Prompt on click
// renders Send
// renders X button to close a window
// renders on click of an open button
