import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateBook from "./components/Book";
import AddBook from "./components/Create";
import ListBook from "./components/ListBook";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListBook />} />
        <Route path={"/books/add"} element={<AddBook />} />
        <Route path={`/books/:bookId`} element={<UpdateBook />} />
      </Routes>
    </BrowserRouter>
  );
}
