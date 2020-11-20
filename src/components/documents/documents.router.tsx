import React from "react";
import { Documents } from "./documents";
import { Route, Switch } from "react-router-dom";
export const DocumentsRoutes = () => {
  return (
    <Switch>
      <Route exact path="/documents" component={Documents} />
    </Switch>
  );
};
