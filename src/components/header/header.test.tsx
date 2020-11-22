import React from 'react';
import { Header } from './header';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { DocumentContext, DocumentContextState } from '../documents';
import { contextHoc } from '../../utils/contextHoc';

describe('Header', () => {
  it('Header renders app component without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  it('Header is rendered', () => {
    const { container } = render(<Header />);

    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
  });

  it('Header breadcrumbs is rendered for documents page', () => {
    const history = createMemoryHistory();
    history.push('/documents');

    render(
      <Router history={history}>
        <Header />
      </Router>
    );

    expect(screen.getByText(/documents/i)).toBeInTheDocument();
  });

  it('Header buttons when rendered for editing document', () => {
    const documentState = {
      location: '/document',
    } as DocumentContextState;

    const headerComponent = <Header />;

    const { container } = render(
      contextHoc<DocumentContextState>(
        DocumentContext,
        documentState,
        headerComponent
      )
    );

    const saveButton = container.querySelector(
      '.toolbar-buttons .MuiButton-root:last-child span'
    );
    expect(saveButton?.innerHTML).toContain('Save');
  });

  it('Header buttons when rendered for documents page', () => {
    const documentState = {
      location: '/documents',
    } as DocumentContextState;

    const headerComponent = <Header />;

    const { container } = render(
      contextHoc<DocumentContextState>(
        DocumentContext,
        documentState,
        headerComponent
      )
    );

    const newDocumentButton = container.querySelector(
      '.toolbar-buttons .MuiButton-root:last-child span'
    );

    expect(newDocumentButton?.innerHTML).toContain('New document');
  });
});
