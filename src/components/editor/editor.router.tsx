import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { EditorContainer } from './editor-container';

export const EditorRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/document" />
      </Route>
      <Route exact path="/document/:id" component={EditorContainer}></Route>
      <Route path="/document" component={EditorContainer}></Route>
    </Switch>
  );
};
