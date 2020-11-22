import React from 'react';
import { render } from '@testing-library/react';
import { DocumentNotFound } from './document-not-found';

describe('Document not found', () => {
  it('Header renders app component without crashing', () => {
    const { container } = render(<DocumentNotFound />);
    expect(container).toBeInTheDocument();
  });
});
