import { Editor } from './editor';
import { useParams } from 'react-router-dom';
import { Document, DocumentContext } from '../documents';
import { Container, LinearProgress } from '@material-ui/core';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import React, { useContext, useEffect, useState } from 'react';
import { getDocument } from '../../services';

export const EditorContainer = () => {
  const { document, setDocument } = useContext(DocumentContext);
  const [loading, setLoading] = useState(true);
  const params = useParams() as { id: Document['id'] };
  const getData = async (id: Document['id']) => {
    const document = await getDocument(id);
    return document;
  };

  useEffect(() => {
    if (params.id) {
      getData(params.id).then((document) => {
        setDocument({
          ...document,
          id: params.id,
        });
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container maxWidth="md">
      {loading && <LinearProgress />}
      {!loading && (
        <Editor
          text={document.text}
          onEditorChange={(text: Document['text']) => {
            setDocument({ ...document, text });
          }}
        />
      )}
    </Container>
  );
};
