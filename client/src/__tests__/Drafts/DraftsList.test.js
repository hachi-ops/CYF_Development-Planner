import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import DraftsList from "../../components/dashboard/files/DraftsList";

// afterEach(() => {
//   cleanup();
// });

test("should render DraftsList component", () => {
  render(<DraftsList />);

  const draftsList = screen.getByTestId("drafts-list");

  expect(draftsList).toBeInTheDocument();
});

// open files menu on click of an icon/ icon-text

// test("ListDrafts matches snapshot", () => {
//   const component = renderer.create(<ListDrafts />);

//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });

// test("should render Element component", () => {
//   render(<Element />);

//   const elementElement = screen.getByTestId("element");

//   expect(elementElement).toBeInTheDocument();
// });
