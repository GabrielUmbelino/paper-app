import { Document, FirebaseDocuments } from '../components';
import { documentsToArray } from './documentsToArray';
const document = {
  "name": "Documento",
  "text": "<p>asdasdasdasd</p>\n"
} as Document;

const firebaseDocuments: FirebaseDocuments = {
  "-MMoRnfdUhdagCepBKEN": document
};

describe('documentsToArray', () => {
  it('Process empty documents', () => {
    const documents = documentsToArray({});
    expect(documents.length).toEqual(0);
  });

  it('Process documents', () => {
    const documents = documentsToArray(firebaseDocuments);
    expect(documents[0].id).toEqual("-MMoRnfdUhdagCepBKEN");
  });
});
