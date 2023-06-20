import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Dashboard from "../../components/dashboard/Dashboard";
import Logout from "../../components/dashboard/controls/Logout";
import DashboardNavigation from "../../components/dashboard/controls/DashboardNavigation";

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
