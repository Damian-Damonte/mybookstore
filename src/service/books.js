import { del, get, post, put } from "./api";

const PAGE = 0;
const PAGE_SIZE = 8;
const SORT = "price";

export const getBooks = async () => {
  return await get(`/books?page=${PAGE}&size=${PAGE_SIZE}&sort=${SORT}`);
};

export const searchBooksByTitle = async (title) => {
  return await get(
    `/books/search?title=${title}&page=${PAGE}&size=${PAGE_SIZE}&sort=${SORT}`
  );
};

export const postBook = async (payload) => {
  return await post("/books", payload);
};

export const updateBook = async (id, payload) => {
  return await put(`/books/${id}`, payload);
};

export const deleteBook = async(id) => {
  return await del(`/books/${id}`)
}