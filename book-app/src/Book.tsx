import './Book.css'

const BASE_IMG_URL = `https://covers.openlibrary.org/b/isbn/`;

export type tBook = {
  authorName: string,
  isbn: string[]
  title: string
}

export default function Book({ book }: { book: tBook }) {
  console.log("Book", book)
  return (
    <div className="book">
      {book.title}
      {book.authorName}
      {book.isbn && 
        <img src={`${BASE_IMG_URL}${book.isbn[0]}-S.jpg`} />
      }
      {book.isbn &&
        <a href={`https://openlibrary.org/isbn/${book.isbn[0]}`}>
          Open Library Entry
        </a>
      }
    </div>
  )
}