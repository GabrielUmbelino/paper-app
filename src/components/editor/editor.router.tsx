import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Editor } from './editor';
export const EditorRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/document" />
      </Route>
      <Route exact path="/document" component={Editor}></Route>
    </Switch>
  );
};
