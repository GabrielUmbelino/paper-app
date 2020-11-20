import React, { useContext, useEffect, useState } from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import axios from 'axios';
import { DocumentContext } from './documents.context';
import { DocumentNotFound } from './document-not-found';
export const Documents = () => {
  const [loading, setLoading] = useState(false);
  const documentContext = useContext(DocumentContext);
  const hasDocuments = () =>
    !documentContext.documents || !documentContext.documents.length;

  const getDocuments = async () => {
    if (!loading && hasDocuments()) {
      setLoading(true);
      axios.get('/documents.json').then((response) => {
        setLoading(false);
        documentContext.setDocuments(response.data);
      });
    }
  };

  useEffect(() => {
    getDocuments();
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        {hasDocuments() ? (
          <DocumentNotFound />
        ) : (
          <p>{documentContext.documents.length}</p>
        )}
      </Container>
    </React.Fragment>
  );
};
