import { get, post } from "./api";

const PAGE = 0;
const PAGE_SIZE = 12;
const SORT = "title";

export const getBooks = async () => {
  const response = await get(
    `/books?page=${PAGE}&size=${PAGE_SIZE}&sort=${SORT}`
  );
  return response;
};

export const searchBooksByTitle = async (title) => {
  const response = await get(
    `/books/search?title=${title}&page=${PAGE}&size=${PAGE_SIZE}&sort=${SORT}`
  );
  return response;
};

export const postBook = async (payload) => {
  const response = await post("/books", payload);
  return response;
};
