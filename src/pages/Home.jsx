import React from "react";
import HeroSection from "../components/HeroSection";
import book from "./../assets/book.png";

export default function Home() {
  return (
    <>
      {/* Hero Section like section 1 */}
      <HeroSection />

      {/* book list */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3">
        {[1, 2, 3, 4, 5].map(() => (
          <div className="p-4 border">
            <img src={book} alt="book" />
            <di className="text-center space-y-2 mt-3">
              <h1>Book title</h1>
              <p>Description</p>
              {/* genres */}
              <div className="flex flex-wrap">
                {["travel", "knowledge", "travel", "knowledge"].map((genre) => (
                  <span className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500">
                    {genre}
                  </span>
                ))}
              </div>
            </di>
          </div>
        ))}
      </div>
    </>
  );
}
