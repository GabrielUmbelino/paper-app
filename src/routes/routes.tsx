import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DocumentsRoutes, EditorRoutes } from '../components';
import { DocumentContextProvider } from '../components/documents/documents.context';
import { Header } from '../components/header/header';

export const Routes = () => {
  return (
    <DocumentContextProvider>
      <Header />
      <Router>
        <EditorRoutes />
        <DocumentsRoutes />
      </Router>
    </DocumentContextProvider>
  );
};
