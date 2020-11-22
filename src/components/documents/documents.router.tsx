import React, { useContext, useEffect } from 'react';
import { Documents } from './documents';
import { Route, Switch, useLocation } from 'react-router-dom';
import { DocumentContext } from './documents.context';
export const DocumentsRoutes = () => {
  const { setLocation } = useContext(DocumentContext);
  const location = useLocation();

  useEffect(() => {
    setLocation(location.pathname);
  }, []);

  return (
    <Switch>
      <Route exact path="/documents" component={Documents} />
    </Switch>
  );
};
