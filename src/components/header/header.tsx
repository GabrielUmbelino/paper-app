import React from "react";
import "./header.css";
import {
  AppBar,
  Breadcrumbs,
  Toolbar,
  Link,
  Typography,
  Button,
} from "@material-ui/core";

export const Header = () => {
  const context = {
    document: {
      name: null,
    },
  };

  const onSave = (event: React.MouseEvent) => {
    console.log("on save", event);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar variant="dense">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/documents" onClick={() => {}}>
            Documents
          </Link>
          {context.document && (
            <Typography color="textPrimary">
              {context.document.name || "New Document"}
            </Typography>
          )}
        </Breadcrumbs>
        <div className="toolbar-buttons">
          {!context.document && (
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
          {context.document && (
            <Button variant="contained" color="default" href="/document" size="small" >
              New document
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};
