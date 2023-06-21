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

// Dashboard Navigation

// render DashboardNavigation component
test("should render DashboardNavigation component", () => {
  render(<DashboardNavigation />);
  const dashboardNavigation = screen.getByTestId("dashboard-navigation");
  expect(dashboardNavigation).toBeInTheDocument();
});

// render icons/icons text
describe("should render: icons on dashboard, icons captions", () => {
  test("should render icons on dashboard", () => {
    render(<DashboardNavigation />);
    const filesIcon = screen.getByAltText("files icon");
    expect(filesIcon).toBeInTheDocument();

    const accountIcon = screen.getByAltText("account icon");
    expect(accountIcon).toBeInTheDocument();
  });

  test("should render icons captions", () => {
    render(<DashboardNavigation />);
    const filesCaption = screen.getByTitle("files");
    expect(filesCaption).toBeInTheDocument();

    const accountCaption = screen.getByTitle("account");
    expect(accountCaption).toBeInTheDocument();
  });
});

// show navigation buttons on click of the div with an icon and caption

// on click of a button:
// open all files

// open sent files

// open received files

// open drafts

// open new

// all files:
// render all files list

// render sender name

// render message title

// render open button

// on click of a button
// render a message

// render answer, cancel, delete buttons

// render answer component on click of answer button

// render delete prompt on click

// return to the previous screen on click of a cancel button

// return to the previous screen on click of X button

// render sent files list

// render open button, message title in each message entry

// open sent file on click of an open button

// render cancel, delete, X buttons

// render received list on click of a button

// render open button

// render received message title

// render received message sender username

// render drafts list

// render draft title and open button

// open draft on click

// render delete, send, edit buttons

// render new draft(file) component on click of a button

// render send, save buttons

// render dropdown, send, X buttons on click of a send button
