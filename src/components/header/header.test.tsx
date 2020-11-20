import React from "react";
import { Header } from "./header";
import { render } from "@testing-library/react";

describe("Header", () => {
  it("Header renders app component without crashing", () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  it("Header is rendered", () => {
    const { container } = render(<Header />);

    const editor = container.querySelector("header");
    expect(editor).toBeInTheDocument();
  });

  it("Header breadcrumbs is rendered for documents page ", () => {
    const { container } = render(<Header />);
    const breadCrumns = container.querySelector(
      ".MuiBreadcrumbs-ol li:last-child"
    );
    expect(breadCrumns?.innerHTML).toContain("Documents");
  });

  it("Header Breadcrumbs is rendered for a new document", () => {
    const { container } = render(<Header />);
    const breadCrumns = container.querySelector(
      ".MuiBreadcrumbs-ol li:last-child"
    );
    expect(breadCrumns?.innerHTML).toContain("New document");
  });

  it("Header Breadcrumbs is rendered for new document", () => {
    const { container } = render(<Header />);
    const breadCrumns = container.querySelector(
      ".MuiBreadcrumbs-ol li:last-child"
    );
    expect(breadCrumns?.innerHTML).toContain("document x");
  });
});
