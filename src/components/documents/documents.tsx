import React, { useContext, useEffect, useState } from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import axios from 'axios';
import { DocumentContext } from './documents.context';
import { DocumentNotFound } from './document-not-found';
export const Documents = () => {
  const [loading, setLoading] = useState(false);
  const context = useContext(DocumentContext);

  useEffect(() => {
    setLoading(true);
    axios.get('/documents.json').then((response) => {
      setLoading(false);
      context.setDocuments(response.data);
    });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        {loading && loading}
        {context.documents && context.documents.length ? (
          <p>{context.documents.length} documents found!</p>
        ) : (
          <DocumentNotFound />
        )}
      </Container>
    </React.Fragment>
  );
};
