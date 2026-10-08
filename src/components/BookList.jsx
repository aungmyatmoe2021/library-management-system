import React from "react";
import bookImage from "./../assets/book.png";
import useFetch from "../hooks/useFetch";
import urls from "./../url";
import { Link } from "react-router-dom";

export default function BookList() {
  let { BASE_URL } = urls();
  let { data: books, loading, error } = useFetch(BASE_URL);
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      {loading && <p>Loading....</p>}
      {/* book list */}
      {!!books && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3">
          {books.map((book) => (
            <Link to={`/book/${book.id}`} key={book.id} className="p-4 border">
              <img src={bookImage} alt="book" />
              <div className="text-center space-y-2 mt-3">
                <h1>{book.title}</h1>
                <p>{book.description}</p>
                {/* genres */}
                <div className="flex flex-wrap">
                  {book.categories.map((genre) => (
                    <span
                      key={genre}
                      className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
