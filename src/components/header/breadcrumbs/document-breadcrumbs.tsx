import React, { useContext, useState } from 'react';
import { Breadcrumbs, Link, TextField, Typography } from '@material-ui/core';
import { DocumentContext } from '../../documents/documents.context';

export const DocumentBreadcrumbs = () => {
  const context = useContext(DocumentContext);
  const [showDocumentName, setShowDocumentName] = useState(false);
  const onSaveDocumentName = (event: React.KeyboardEvent) =>
    event.key === 'Enter' && setShowDocumentName(false);

  const onChangeDocumentName = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    context.setDocument({
      ...context.document,
      name: e.currentTarget.value,
    });
  };

  if (context.documents && context.documents.length) {
    context.documents.forEach((d) => {
      if (context.id === d.id) {
        context.setDocument(d);
      }
    });
  }

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/documents">
        Documents
      </Link>
      {!showDocumentName && (
        <Typography
          color="textPrimary"
          onClick={() => setShowDocumentName(true)}
        >
          {(context.document && context.document.name) || 'New Document'}
        </Typography>
      )}

      {showDocumentName && context.document && (
        <TextField
          value={context.document.name}
          onKeyUp={(e) => onSaveDocumentName(e)}
          onChange={(e) => onChangeDocumentName(e)}
        />
      )}
    </Breadcrumbs>
  );
};
