import axios from 'axios'
import { Document, FirebaseDocuments } from '../components'


export const getDocuments = async () => {
  const { data } = await axios.get<FirebaseDocuments>('/documents.json')
  return data;
}

export const getDocument = async (id: Document['id']) => {
  const { data } = await axios.get<Document>(`/documents/${id}.json`)
  return data;
}

export const deleteDocument = async (id: Document['id']) => {
  const { data } = await axios.delete<Document>(`/documents/${id}.json`)
  return data;
}
export const postDocument = async (document: Document) => {
  const { data } = await axios.post<Document>(`/documents.json`, document)
  return data;
}
export const putDocument = async (id: Document['id'], document: Document) => {
  const { data } = await axios.put<Document>(`/documents/${id}.json`, document)
  return data;
}
