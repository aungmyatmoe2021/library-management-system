import React from "react";
import { useParams } from "react-router-dom";
import urls from "../url";
import useFetch from "../hooks/useFetch";
import bookImage from "./../assets/book.png";

export default function BookDetail() {
  let { id } = useParams();
  let { BASE_URL } = urls();
  let { data: book, loading, error } = useFetch(`${BASE_URL}/${id}`);

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {book && (
        <div className="grid grid-cols-2">
          <div>
            <img src={bookImage} alt="book image" className="w-[80%]" />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <div className="space-x-3">
              {book.categories.map((cat) => (
                <span
                  className="bg-blue-500 text-white rounded-full text-sm px-2 py-1"
                  key={cat}
                >
                  {cat}
                </span>
              ))}
            </div>
            <p>{book.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
