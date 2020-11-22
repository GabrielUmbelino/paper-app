import React from 'react';

export function contextHoc<T>(
  context: React.Context<T>,
  state: T,
  component: JSX.Element
) {
  return (
    <context.Provider value={state}>
      <context.Consumer>{() => component}</context.Consumer>
    </context.Provider>
  );
}
