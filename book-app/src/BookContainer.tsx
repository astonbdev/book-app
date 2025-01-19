import Book from "./Book";
import { getBooks } from "./api.ts";

import { useQuery } from '@tanstack/react-query'

export default function BookContainer() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => getBooks()
  });

  if (isLoading) return <p>"Loading..."</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(`data: ${data.numFound}`);
  const books = data.docs.map((b: any) => {
    const book = {
      authorName: b.author_name,
      isbn: b.isbn,
      title: b.title,
    }

    return <Book book={book}/>
  });

  return (
    <div className="book-base-container">
      <div className="book-container">
        {books}
      </div>
    </div>
  );

}