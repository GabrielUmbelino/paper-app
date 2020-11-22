import React from 'react';
import { Document } from './documents.types';

export interface DocumentContextProps {
  children: React.ReactNode;
}

export interface DocumentContextState {
  id: Document['id'];
  document: Document;
  documents: Document[];
  location: string;
  setDocument: (document: Document) => void;
  setDocuments: (document: Document[]) => void;
  setLocation: (location: string) => void;
}

export const DocumentContext = React.createContext<DocumentContextState>(
  {} as DocumentContextState
);

export class DocumentContextProvider extends React.Component<
  DocumentContextProps,
  DocumentContextState
> {
  public state: DocumentContextState = {
    id: '',
    location: '',
    document: {} as Document,
    documents: [],
    setDocument: (document: Document) => this.setState({ document }),
    setDocuments: (documents: Document[]) => this.setState({ documents }),
    setLocation: (location: string) => this.setState({ location }),
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
