import './header.sass';
import React, { useContext, useState } from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { DocumentBreadcrumbs } from './breadcrumbs/document-breadcrumbs';
import { DocumentContext } from '../documents';
import axios from 'axios';
import SaveIcon from '@material-ui/icons/Save';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Header = () => {
  const context = useContext(DocumentContext);
  const [loading, setLoading] = useState(false);
  const onSave = (_event: React.MouseEvent) => {
    axios.post('/documents.json', context.document).then((response) => {
      setLoading(false);
      context.setDocuments(response.data);
    });
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar variant="dense">
        <DocumentBreadcrumbs />
        <div className="toolbar-buttons">
          {loading && <CircularProgress />}
          {context.location && context.location.indexOf('documents') <= 0 && (
            <Button
              variant="contained"
              color="default"
              size="small"
              startIcon={<SaveIcon />}
              component={Button}
              onClick={onSave}
              disabled={loading}
            >
              Save
            </Button>
          )}
          {context.location && context.location.indexOf('documents') > 0 && (
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
