import React from "react";
import { useParams } from "react-router-dom";
import urls from "../url";
import useFetch from "../hooks/useFetch";

export default function BookDetail() {
  let { id } = useParams();
  let { BASE_URL } = urls();
  let { data: book, loading, error } = useFetch(`${BASE_URL}/${id}`);

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {book && <h1>{book.title}</h1>}
    </>
  );
}
