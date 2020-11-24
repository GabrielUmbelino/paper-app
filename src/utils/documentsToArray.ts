import { FirebaseDocuments, Document } from './../components/documents/documents.types';
export const documentsToArray = (documents: FirebaseDocuments): Document[] => {
  if (!documents) {
    return []
  }

  return Object.entries(documents).map((firebaseDocument) => {
    const [id, documentProperties] = firebaseDocument;
    return { ...documentProperties, id } as Document
  })
}