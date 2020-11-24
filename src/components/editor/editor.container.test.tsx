import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, waitFor } from '@testing-library/react';
import { EditorContainer } from './editor-container';
import { Document, DocumentContext, DocumentContextState } from '../documents';
import { contextHoc } from '../../utils';
import { act } from 'react-dom/test-utils';

describe('editor', () => {
  it('editor container  is rendered', () => {
    const history = createMemoryHistory();
    const documentState = {
      document: {
        text: '<p>papapa</p>',
      },
    } as DocumentContextState;

    history.push('/document');
    const editorComponent = (
      <Router history={history}>
        <EditorContainer />
      </Router>
    );
    const { container } = render(
      contextHoc<DocumentContextState>(
        DocumentContext,
        documentState,
        editorComponent
      )
    );

    const editor = container.querySelector('.rich-editor');
    expect(editor).toBeInTheDocument();
  });
  it('editor container loading', async () => {
    const history = createMemoryHistory();
    history.push('/document/1');
    const documentState = {
      document: {
        text: '<p>papapa</p>',
      },
      setDocument: (document: Document) => {},
      setDocuments: (documents: Document[]) => {},
      setLocation: (location: string) => {},
    } as DocumentContextState;

    await act(async () => {
      const { container } = render(
        contextHoc<DocumentContextState>(
          DocumentContext,
          documentState,
          <Router history={history}>
            <EditorContainer />
          </Router>
        )
      );
      expect(
        container.querySelector('.MuiLinearProgress-root')
      ).toBeInTheDocument();
    });
  });
  it('editor container loaded', async () => {
    const history = createMemoryHistory();
    history.push('/document/1');
    const documentState = {
      document: {
        text: '<p>papapa</p>',
      },
      setDocument: (document: Document) => {},
      setDocuments: (documents: Document[]) => {},
      setLocation: (location: string) => {},
    } as DocumentContextState;
    const { container } = render(
      contextHoc<DocumentContextState>(
        DocumentContext,
        documentState,
        <Router history={history}>
          <EditorContainer />
        </Router>
      )
    );
    await waitFor(async () => {
      expect(
        container.querySelector('.MuiLinearProgress-root')
      ).not.toBeInTheDocument();
    });
  });
});
