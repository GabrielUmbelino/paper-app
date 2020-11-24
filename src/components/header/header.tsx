import './header.sass';
import AddIcon from '@material-ui/icons/Add';
import PrintIcon from '@material-ui/icons/Print';
import { useHistory } from 'react-router-dom';
import { DocumentContext } from '../documents';
import SaveIcon from '@material-ui/icons/Save';
import React, { useContext, useState } from 'react';
import { postDocument, putDocument } from '../../services';
import { Notification, NotificationProps } from '../notification';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AppBar, Toolbar, Button, Container } from '@material-ui/core';
import { DocumentBreadcrumbs } from './breadcrumbs/document-breadcrumbs';
export const Header = () => {
  const history = useHistory();
  const context = useContext(DocumentContext);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    message: '',
    type: 'info',
    isOpened: false,
  });

  const onSave = (_event: React.MouseEvent) => {
    let saveDocument;

    if (context.document.id) {
      saveDocument = putDocument(context.document.id, context.document);
    } else {
      saveDocument = postDocument(context.document);
    }

    saveDocument
      .then((data) => {
        if (!context.document.id) {
          history.push(`/document/${data.name}`);
        }
        onSaveSuccess();
      })
      .catch(() => onSaveError())
      .finally(() => setLoading(false));
  };

  const onSaveSuccess = () => {
    setNotification({
      ...notification,
      type: 'success',
      message: 'Document saved successfully',
      isOpened: true,
    });
  };

  const onSaveError = () => {
    setNotification({
      ...notification,
      type: 'error',
      message: 'Error saving document',
      isOpened: true,
    });
  };

  const onPrint = () => {
    window.print();
  };

  return (
    <AppBar position="static" color="default">
      <Container maxWidth="md">
        <Toolbar variant="dense" disableGutters={true}>
          <DocumentBreadcrumbs />
          <div className="toolbar-buttons">
            {loading && <CircularProgress />}
            {context.location && context.location.indexOf('documents') <= 0 && (
              <React.Fragment>
                <Button
                  color="primary"
                  size="small"
                  startIcon={<SaveIcon />}
                  component={Button}
                  onClick={onSave}
                  disabled={loading}
                >
                  Save
                </Button>
                <Button
                  color="primary"
                  onClick={onPrint}
                  size="small"
                  startIcon={<PrintIcon />}
                >
                  Print
                </Button>
              </React.Fragment>
            )}
            {context.location && context.location.indexOf('documents') > 0 && (
              <Button
                color="primary"
                href="/document"
                size="small"
                startIcon={<AddIcon />}
              >
                New document
              </Button>
            )}
          </div>
          <Notification
            message={notification.message}
            type={notification.type as NotificationProps['type']}
            isOpened={notification.isOpened}
            onClose={(isClosed) =>
              setNotification({ ...notification, isOpened: isClosed })
            }
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
