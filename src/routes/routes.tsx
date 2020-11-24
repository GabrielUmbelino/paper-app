import React from 'react';
import { Header } from '../components/header/header';
import { BrowserRouter as Router } from 'react-router-dom';
import { DocumentsRoutes, EditorRoutes } from '../components';
import { DocumentContextProvider } from '../components/documents/documents.context';

export const Routes = () => {
  return (
    <DocumentContextProvider>
      <Router>
        <Header />
        <EditorRoutes />
        <DocumentsRoutes />
      </Router>
    </DocumentContextProvider>
  );
};
