import React from 'react';
import App from './app';
import { render } from '@testing-library/react';

describe('app', () => {
  it('renders learn react link', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
