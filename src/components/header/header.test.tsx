import React from 'react';
import { Header } from './header';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

describe('Header', () => {
  it('Header renders app component without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  it('Header is rendered', () => {
    const { container } = render(<Header />);

    const editor = container.querySelector('header');
    expect(editor).toBeInTheDocument();
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

  it('Header Breadcrumbs is rendered for a new document', () => {
    const { container } = render(<Header />);
    const breadCrumns = container.querySelector(
      '.MuiBreadcrumbs-ol .MuiBreadcrumbs-li:last-child p'
    );
    expect(breadCrumns?.innerHTML).toContain('New Document');
  });

  it('Header Breadcrumbs is rendered for new document', () => {
    const history = createMemoryHistory();
    history.push('/documents/1');

    const { container } = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    const breadCrumns = container.querySelector(
      '.MuiBreadcrumbs-ol .MuiBreadcrumbs-li:last-child p'
    );

    expect(breadCrumns?.innerHTML).toContain('document x');
  });

  it('When in documents page renders new document button', () => {})
  it('When in editor page renders save button', () => {})
});
