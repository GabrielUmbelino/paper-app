import React from 'react';
import { render } from '@testing-library/react';
import { DocumentNotFound } from './document-not-found';

describe('Document not found', () => {
  it('Document not found renders app component without crashing', () => {
    const { container } = render(<DocumentNotFound />);
    expect(container).toBeInTheDocument();
  });

  it('Should render document not found html', () => {
    const { container } = render(<DocumentNotFound />);
    const notFoundText = container.querySelector(
      '.MuiBox-root .MuiTypography-body1'
    );

    expect(notFoundText?.innerHTML).toContain(
      'You seem not to have documents yet, click here to create a new one'
    );
  });
});
