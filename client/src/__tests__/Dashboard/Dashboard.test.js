import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";

import Dashboard from "../../components/Dashboard";
import Logout from "../../components/dashboard/Logout";
import DashboardNavigation from "../../components/dashboard/DashboardNavigation";

// render Dashboard component
test("should render Dashboard component", () => {
  render(<Dashboard />);

  const dashboardElement = screen.getByTestId("dashboard");

  expect(dashboardElement).toBeInTheDocument();
});

// render Logout component
test("should render Logout component", () => {
  render(<Logout />);

  const logoutElement = screen.getByTestId("logout");
  expect(logoutElement).toBeInTheDocument();
});

// render DashboardNavigation component
test("should render DashboardNavigation component", () => {
  render(<DashboardNavigation />);

  const dashboardNavigationEl = screen.getByTestId("dashboard-navigation");
  expect(dashboardNavigationEl).toBeInTheDocument();
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
