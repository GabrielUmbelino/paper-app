import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import './document-list.sass';
import { Document } from '../documents.types';
import CreateIcon from '@material-ui/icons/Create';
import { DocumentNotFound } from '../document-not-found';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { deleteDocument } from '../../../services';
import { Notification, NotificationProps } from '../../notification';

export interface DocumentListProps {
  documents: Document[];
  onDocumentDeleted: (id: Document['id']) => void;
}
export const DocumentList = ({
  documents,
  onDocumentDeleted,
}: DocumentListProps) => {
  const [notification, setNotification] = useState({
    message: '',
    type: 'info',
    isOpened: false,
  });

  const onDelete = (_event: React.MouseEvent, id: Document['id']) => {
    deleteDocument(id)
      .then(() => {
        onDeleteSuccess();
        onDocumentDeleted(id);
      })
      .catch(() => onDeleteError());
  };

  const onDeleteSuccess = () => {
    setNotification({
      ...notification,
      type: 'success',
      message: 'Document deleted successfully',
      isOpened: true,
    });
  };

  const onDeleteError = () => {
    setNotification({
      ...notification,
      type: 'error',
      message: 'Error deleting document',
      isOpened: true,
    });
  };

  return (
    <React.Fragment>
      {documents && documents.length ? (
        <React.Fragment>
          <Typography gutterBottom variant="h2" component="h1">
            Documents
          </Typography>
          <Grid container spacing={3}>
            {documents.map(({ id, name, text }) => (
              <Grid item md={4} sm={6} xs={12} key={id}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {name || 'Untitled'}
                    </Typography>
                    <div
                      className="document-text"
                      dangerouslySetInnerHTML={{ __html: text }}
                    />
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton
                      aria-label="Delete"
                      onClick={(e) => onDelete(e, id)}
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                    <IconButton aria-label="Edit" href={`/document/${id}`}>
                      <CreateIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </React.Fragment>
      ) : (
        <DocumentNotFound />
      )}
      <Notification
        message={notification.message}
        type={notification.type as NotificationProps['type']}
        isOpened={notification.isOpened}
        onClose={(isClosed) =>
          setNotification({ ...notification, isOpened: isClosed })
        }
      />
    </React.Fragment>
  );
};
