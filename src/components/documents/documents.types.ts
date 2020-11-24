export interface Document {
  id: string;
  text: string;
  name: string;
  createDateTime: string;
}

export interface FirebaseDocuments {
  [key: string]: Document
}