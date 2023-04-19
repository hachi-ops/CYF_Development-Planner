import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import ListFiles from "../../components/dashboard/drafts/ListFiles";

afterEach(() => {
  cleanup();
});

test("should render List Files component", () => {
  render(<ListFiles />);

  const listFilesElement = screen.getByTestId("list-files");

  expect(listFilesElement).toBeInTheDocument();
});

// open files menu on click of an icon/ icon-text

// test("ListFiles matches snapshot", () => {
//   const component = renderer.create(<ListFiles />);

//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });

// test("should render Element component", () => {
//   render(<Element />);

//   const elementElement = screen.getByTestId("element");

//   expect(elementElement).toBeInTheDocument();
// });
