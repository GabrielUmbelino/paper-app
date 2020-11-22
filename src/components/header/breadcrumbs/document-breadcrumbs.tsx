import React, { useContext } from 'react';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';
import { DocumentContext } from '../../documents/documents.context';

export const DocumentBreadcrumbs = () => {
  const { documents, id } = useContext(DocumentContext);
  const document =
    documents && documents.length && documents.find((d) => id === d.id);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/documents">
        Documents
      </Link>
      <Typography color="textPrimary">
        {(document && document.name) || 'New Document'}
      </Typography>
    </Breadcrumbs>
  );
};
