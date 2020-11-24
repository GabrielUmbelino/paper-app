import './editor.sass';
import React, { useState } from 'react';
import { Editor as ReactDraft } from 'react-draft-wysiwyg';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Document } from '../documents';

interface EditorProps {
  text: Document['text'];
  onEditorChange: (text: Document['text']) => void;
}

export const Editor = ({ text, onEditorChange }: EditorProps) => {
  const contentBlock = htmlToDraft(text || '');
  let contentState: EditorState;

  if (contentBlock) {
    contentState = EditorState.createWithContent(
      ContentState.createFromBlockArray(contentBlock.contentBlocks)
    );
  } else {
    contentState = EditorState.createEmpty();
  }

  const [editorState, setEditorState] = useState(contentState);

  return (
    <React.Fragment>
      <ReactDraft
        wrapperClassName="rich-editor demo-wrapper"
        editorClassName="demo-editor"
        editorState={editorState}
        onEditorStateChange={(editorState: EditorState) => {
          setEditorState(editorState);
          const text = draftToHtml(
            convertToRaw(editorState.getCurrentContent())
          );
          onEditorChange(text);
        }}
      />
    </React.Fragment>
  );
};
