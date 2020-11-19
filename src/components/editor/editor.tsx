import React, { useState } from "react";
import Draft, { htmlToDraft } from "react-wysiwyg-typescript";
import { EditorComponentProps } from "./editor.types";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./editor.css";

export const Editor = ({ html }: EditorComponentProps) => {
  const [editorState, setEditorState] = useState(htmlToDraft(html || ''));

  return (
    <Draft
      editorState={editorState}
      wrapperClassName="rich-editor demo-wrapper"
      editorClassName="demo-editor"
      onEditorStateChange={(editorState) => {
        setEditorState(editorState);
      }}
      placeholder="write something..."
    />
  );
};
