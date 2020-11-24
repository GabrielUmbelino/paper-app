import React from 'react';
import { render } from '@testing-library/react';
import { Notification } from './notification';

describe('Notification', () => {
  it('Notification component renders without crashing', () => {
    const { container } = render(
      <Notification
        message=""
        type="error"
        isOpened={true}
        onClose={(isClosed) => {}}
      />
    );
    expect(container).toBeInTheDocument();
  });

  it('Notification is closed', () => {
    const { container } = render(
      <Notification
        message=""
        type="error"
        isOpened={false}
        onClose={(isClosed) => {}}
      />
    );
    expect(
      container.querySelector('.MuiSnackbar-root')
    ).not.toBeInTheDocument();
  });

  it('Notification is opened', () => {
    const { container } = render(
      <Notification
        message="new message"
        type="error"
        isOpened={true}
        onClose={(isClosed) => {}}
      />
    );
    expect(
      container.querySelector('.MuiSnackbar-root .MuiAlert-message')?.innerHTML
    ).toContain('new message');
  });
});
