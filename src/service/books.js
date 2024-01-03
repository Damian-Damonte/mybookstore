import { del, get, post, put } from "./api";

const PAGE_SIZE = 8;

export const searchBooks = async(title, sort, page) => {
  if (title === null || title === "") {
    return await get(`/books?page=${page-1}&size=${PAGE_SIZE}&sort=${sort}`)
  } else {
    return await get(`/books/search?title=${title}&page=${page-1}&size=${PAGE_SIZE}&sort=${sort}`);
  }
}

export const postBook = async (payload) => {
  return await post("/books", payload);
};

export const updateBook = async (id, payload) => {
  return await put(`/books/${id}`, payload);
};

export const deleteBook = async(id) => {
  return await del(`/books/${id}`)
}