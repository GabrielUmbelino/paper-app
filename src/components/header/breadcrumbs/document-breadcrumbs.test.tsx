import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { contextHoc } from '../../../utils/contextHOC';
import { render, screen } from '@testing-library/react';
import { DocumentBreadcrumbs } from './document-breadcrumbs';
import { DocumentContext, DocumentContextState } from '../../documents';

describe('DocumentBreadcrumbs', () => {
  it('Renders Breadcrumbs without crashing', () => {
    const { container } = render(<DocumentBreadcrumbs />);
    expect(container).toBeInTheDocument();
  });

  it('Breadcrumbs is html is generated', () => {
    const { container } = render(<DocumentBreadcrumbs />);

    const breadcrumbs = container.querySelector('.MuiBreadcrumbs-ol');
    expect(breadcrumbs).toBeInTheDocument();
  });

  it('Breadcrumbs is rendered for documents page', () => {
    const history = createMemoryHistory();
    history.push('/documents');

    render(
      <Router history={history}>
        <DocumentBreadcrumbs />
      </Router>
    );

    expect(screen.getByText(/documents/i)).toBeInTheDocument();
  });

  it('Breadcrumbs is rendered for a new document', () => {
    const { container } = render(<DocumentBreadcrumbs />);
    const breadCrumns = container.querySelector(
      '.MuiBreadcrumbs-ol .MuiBreadcrumbs-li:last-child p'
    );
    expect(breadCrumns?.innerHTML).toContain('New Document');
  });

  it('Breadcrumbs is rendered for editing a document', () => {
    const history = createMemoryHistory();
    history.push('/documents/1');

    const documentState = {
      id: '1',
      documents: [
        {
          id: '1',
          name: 'document x',
          text: '<p>this is a document</p>',
          createDateTime: '',
        },
      ],
    } as DocumentContextState;

    const breadcrumbComponent = (
      <Router history={history}>
        <DocumentBreadcrumbs />;
      </Router>
    );

    const { container } = render(
      contextHoc<DocumentContextState>(
        DocumentContext,
        documentState,
        breadcrumbComponent
      )
    );

    const breadCrumns = container.querySelector(
      '.MuiBreadcrumbs-ol .MuiBreadcrumbs-li:last-child p'
    );

    expect(breadCrumns?.innerHTML).toContain('document x');
  });
});
