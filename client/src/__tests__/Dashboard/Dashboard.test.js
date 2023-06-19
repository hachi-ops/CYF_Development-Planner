import { render, screen } from "@testing-library/react";
import Dashboard from "../../components/dashboard/Dashboard";
import Logout from "../../components/dashboard/controls/Logout";
import DashboardNavigation from "../../components/dashboard/controls/DashboardNavigation";

// render dashboard
test("render Dashboard", () => {
  render(<Dashboard />);
  const dashboard = screen.getByTestId("dashboard");
  expect(dashboard).toBeInTheDocument();
});

// render dashboard header
test("render dashboard header", () => {
  render(<Dashboard />);
  const header = screen.getByTitle("header");
  expect(header).toBeInTheDocument();
});

// render logout button
test("should render Logout button", () => {
  render(<Logout />);
  const logoutButton = screen.getByTitle("logout");
  expect(logoutButton).toBeInTheDocument();
});

// render Dashboard Navigation
test("should render DashboardNavigation component", () => {
  render(<DashboardNavigation />);
  const dashboardNavigation = screen.getByTestId("dashboard-navigation");
  expect(dashboardNavigation).toBeInTheDocument();
});

// render icons/icons text
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

// render navigation buttons: files, messages, account

// render files navigation buttons
// render messages navigation buttons
// render account navigation button

// Files

// render drafts list

// render empty list when no items present
// render open button
// render delete button
// render save button
// render edit button
// render X button

// render sent list

// render empty list when no items present
// render open button
// render delete button
// render X button

// render new list

// render empty list when no items present
// render open button
// render save button
// render X button

// Messages
// render all list
// render sent list
// render received list

// Account
// render account
