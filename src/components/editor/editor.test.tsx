import React from 'react';
import { Editor } from './editor';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

describe('editor', () => {
  it('renders app component without crashing', () => {
    const history = createMemoryHistory();
    history.push('/document/1');
    const { container } = render(
      <Editor text="" onEditorChange={(text) => {}} />
    );
    expect(container).toBeInTheDocument();
  });
});
