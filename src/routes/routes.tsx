import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { DocumentsRoutes, EditorRoutes } from "../components";

export const Routes = () => {
  return (
    <Router>
      <EditorRoutes />
      <DocumentsRoutes />
    </Router>
  );
};
