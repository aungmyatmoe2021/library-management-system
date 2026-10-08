import React from "react";
import HeroSection from "../components/HeroSection";
import book from "./../assets/book.png";
import BookList from "../components/BookList";

export default function Home() {
  return (
    <>
      {/* Hero Section like section 1 */}
      <HeroSection />

      {/* book list */}
      <BookList />
    </>
  );
}
