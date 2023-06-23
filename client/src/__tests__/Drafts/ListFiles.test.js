import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import ListDrafts from "../../components/dashboard/files/ListDrafts";

afterEach(() => {
  cleanup();
});

test("should render List Files component", () => {
  render(<ListDrafts />);

  const ListDraftsElement = screen.getByTestId("list-files");

  expect(ListDraftsElement).toBeInTheDocument();
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
