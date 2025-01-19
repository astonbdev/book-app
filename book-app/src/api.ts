const BASE_URL = "https://openlibrary.org/";

const options = {
  method: "GET",
  headers: {
    "User-Agent": "astonbdev-book-app/1.0", // required by openlibrary
    "Content-Type": "application/json",
  },
};

/**
 * returns data from openlibrary api based on input query
 * @param query: string the query to search by
 * @returns 
 */
export async function getBooks(query: string = "The Lord of the Rings"){
  const url = new URL(`${BASE_URL}search.json`)
  url.searchParams.set("q", query);

  const resp = await fetch(url);

  if(!resp.ok) throw new Error("Failed to fetch");

  const data = await resp.json();
  return data;
}