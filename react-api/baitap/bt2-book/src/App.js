import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import UpdateBook from "./components/UpdateBook";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path={"/books/add"} element={<AddBook />} />
        <Route path={`/books/:bookId`} element={<UpdateBook />} />
      </Routes>
    </BrowserRouter>
  );
}
