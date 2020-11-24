import React from 'react';
import './document-not-found.sass';
import notFoundImage from '../../../assets/images/not_found.svg';
import { Box, Button, Typography } from '@material-ui/core';

export const DocumentNotFound = () => {
  return (
    <React.Fragment>
      <figure>
        <img src={notFoundImage} alt="You have no documents :/" />
      </figure>
      <Box
        textAlign="center"
        justifyContent="space-between"
        flexDirection="column"
      >
        <Typography color="textPrimary" align="center">
          You seem not to have documents yet, click here to create a new one
        </Typography>
        <Button href="/document" color="primary" size="small">
          Create Document
        </Button>
      </Box>
    </React.Fragment>
  );
};
