import "./editor.sass";
import React, { useState } from "react";
import { EditorComponentProps } from "./editor.types";
import { Editor as ReactDraft } from "react-draft-wysiwyg";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, ContentState } from "draft-js";

export const Editor = ({ html }: EditorComponentProps) => {
  let contentState: EditorState;
  const contentBlock = htmlToDraft(html || "");

  if (contentBlock) {
    contentState = EditorState.createWithContent(
      ContentState.createFromBlockArray(contentBlock.contentBlocks)
    );
  } else {
    contentState = EditorState.createEmpty();
  }

  const [editorState, setEditorState] = useState(() => {
    return contentState;
  });

  return (
    <ReactDraft
      wrapperClassName="rich-editor demo-wrapper"
      editorClassName="demo-editor"
      editorState={editorState}
      onEditorStateChange={(editorState: EditorState) => {
        setEditorState(editorState);
      }}
    />
  );
};
