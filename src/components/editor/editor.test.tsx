import React from "react";
import { Editor } from "./editor";
import { render } from "@testing-library/react";

describe("editor", () => {
  it("renders app component without crashing", () => {
    const { container } = render(<Editor />);
    expect(container).toBeInTheDocument();
  });

  it("editor is rendered", () => {
    const { container } = render(<Editor />);

    const editor = container.querySelector(".rich-editor");
    expect(editor).toBeInTheDocument();
  });

  it("editor renders html passed to it", () => {
    const { container } = render(<Editor html={"renders me"} />);
    const renderedHtml = container.querySelector(
      ".rich-editor .public-DraftEditor-content span > *"
    );
    expect(renderedHtml?.outerHTML).toContain(
      '<span data-text="true">renders me</span>'
    );
  });
});
