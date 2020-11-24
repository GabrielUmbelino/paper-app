import React, { useContext, useEffect, useState } from 'react';
import { CssBaseline, Container, LinearProgress } from '@material-ui/core';
import { getDocuments } from '../../services';
import { DocumentContext } from './documents.context';
import { DocumentList } from './document-list';
import { documentsToArray } from '../../utils/documentsToArray';
import { Document } from './documents.types';
export const Documents = () => {
  const [loading, setLoading] = useState(true);
  const context = useContext(DocumentContext);
  const getData = async () => {
    const data = await getDocuments();
    setLoading(false);
    const documents = documentsToArray(data);
    return documents;
  };

  useEffect(() => {
    getData().then((documents) => context.setDocuments(documents));
  }, []);

  const onDocumentDeleted = (id: Document['id']) =>
    context.setDocuments(context.documents.filter((d) => id !== d.id));

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        {loading ? (
          <LinearProgress />
        ) : (
          <DocumentList
            documents={context.documents}
            onDocumentDeleted={onDocumentDeleted}
          />
        )}
      </Container>
    </React.Fragment>
  );
};
