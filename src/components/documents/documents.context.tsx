import React from 'react';
import { Document } from './documents.types';

interface Props {
  children: React.ReactNode;
}

interface State {
  id: Document['id'];
  documents: Document[];
  setDocuments: (documents: Document[]) => void;

}

export const DocumentContext = React.createContext<State>({
  id: '',
  documents: [],
  setDocuments: (documents: Document[]) => {},
});

export class DocumentContextProvider extends React.Component<Props, State> {
  public state: State = {
    id: '',
    documents: [],
    setDocuments: (documents: Document[]) => {
      this.setState({ documents });
    },
  };

  public render() {
    return (
      <DocumentContext.Provider value={this.state}>
        <DocumentContext.Consumer>
          {() => this.props.children}
        </DocumentContext.Consumer>
      </DocumentContext.Provider>
    );
  }
}
