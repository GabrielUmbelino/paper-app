import React from 'react';
import { Document } from '../documents.types';
import { DocumentList } from './document-list';
import { render } from '@testing-library/react';

const documentsMock = [
  {
    id: '1',
    name: 'document x',
    text: '<p>this is a document</p>',
    createDateTime: '',
  },
] as Document[];

describe('Document List', () => {
  it('Renders Document List without crashing', () => {
    const { container } = render(<DocumentList documents={[]} />);
    expect(container).toBeInTheDocument();
  });

  it('Document list html is generated', () => {
    const { container } = render(<DocumentList documents={documentsMock} />);
    const documents = container.querySelector('.MuiTypography-h2');

    expect(documents).toBeInTheDocument();
  });

  it('Document list render list of elements', () => {
    const { container } = render(<DocumentList documents={documentsMock} />);

    const documentName = container.querySelector(
      '.MuiGrid-spacing-xs-3 .MuiGrid-item:last-child .MuiTypography-h5'
    );

    expect(documentName?.innerHTML).toContain('document x');
  });

  it('Document list render empty list of elements', () => {
    const { container } = render(<DocumentList documents={[]} />);

    const notFoundElement = container.querySelector(
      '.MuiBox-root.MuiBox-root-2'
    );

    expect(notFoundElement).toBeInTheDocument();
  });
});
