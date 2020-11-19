import React from "react";
import {
  AppBar,
  Breadcrumbs,
  Toolbar,
  Link,
  Typography,
} from "@material-ui/core";

export const Header = () => {
  const context = {
    document: {
      name: null,
    },
  };
  return (
    <AppBar position="static" color="default">
      <Toolbar variant="dense">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/documents" onClick={() => {}}>
            Documentos
          </Link>
          <Typography color="textPrimary">
            {context.document.name || "New Document"}
          </Typography>
        </Breadcrumbs>
      </Toolbar>
    </AppBar>
  );
};
