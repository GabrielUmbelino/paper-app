import React, { useContext } from 'react';
import './header.css';
import {
  AppBar,
  Breadcrumbs,
  Toolbar,
  Link,
  Typography,
  Button,
} from '@material-ui/core';
import { DocumentContext } from '../documents/documents.context';

export const Header = () => {
  const documentContext = useContext(DocumentContext);

  const onSave = (event: React.MouseEvent) => {
    console.log('on save', event);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar variant="dense">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/documents">
            Documents
          </Link>
          {documentContext && (
            <Typography color="textPrimary">
              {documentContext.id || 'New Document'}
            </Typography>
          )}
        </Breadcrumbs>
        <div className="toolbar-buttons">
          {!documentContext && (
            <Button
              variant="contained"
              color="default"
              size="small"
              component={Button}
              onClick={onSave}
            >
              Save
            </Button>
          )}
          {documentContext && (
            <Button
              variant="contained"
              color="default"
              href="/document"
              size="small"
            >
              New document
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};
