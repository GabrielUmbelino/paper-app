import React from 'react';
import { Documents } from './documents';
import { render, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import { DocumentContextState, DocumentContext } from './documents.context';
import { contextHoc } from '../../utils';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Document } from './documents.types';

var mock = new MockAdapter(axios);
mock.onGet('/documents.json').reply(200, {
  1: {
    name: 'document x',
    text: '<p>this is a document</p>',
    createDateTime: '',
  },
});

it('Renders Documents without crashing', async () => {
  const documentState = {
    setDocument: (document: Document) => {},
    setDocuments: (documents: Document[]) => {},
    setLocation: (location: string) => {},
  } as DocumentContextState;
  const { container } = render(
    contextHoc<DocumentContextState>(
      DocumentContext,
      documentState,
      <Documents />
    )
  );
  await act(async () => {
    expect(container).toBeInTheDocument();
  });
});

it('Documents html is generated', async () => {
  const documentState = {
    setDocument: (document: Document) => {},
    setDocuments: (documents: Document[]) => {},
    setLocation: (location: string) => {},
  } as DocumentContextState;
  const { container } = render(
    contextHoc<DocumentContextState>(
      DocumentContext,
      documentState,
      <Documents />
    )
  );
  await act(async () => {
    const documentsContainer = container.querySelector('.MuiContainer-root');
    expect(documentsContainer).toBeInTheDocument();
  });
});

it('Documents component in loading state', async () => {
  const documentState = {
    setDocument: (document: Document) => {},
    setDocuments: (documents: Document[]) => {},
    setLocation: (location: string) => {},
  } as DocumentContextState;

  await act(async () => {
    const { container } = render(
      contextHoc<DocumentContextState>(
        DocumentContext,
        documentState,
        <Documents />
      )
    );
    expect(
      container.querySelector('.MuiLinearProgress-root')
    ).toBeInTheDocument();
  });
});

it('Documents component has loaded elements', async () => {
  const documentState = {
    setDocument: (document: Document) => {},
    setDocuments: (documents: Document[]) => {},
    setLocation: (location: string) => {},
  } as DocumentContextState;
  const { container } = render(
    contextHoc<DocumentContextState>(
      DocumentContext,
      documentState,
      <Documents />
    )
  );

  await waitFor(async () => {
    expect(
      container.querySelector('.MuiLinearProgress-root')
    ).not.toBeInTheDocument();
  });
});
