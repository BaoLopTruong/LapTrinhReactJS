import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import ListUser from "./components/ListUser";
import Update from "./components/Update";





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListUser />} />
        <Route path={"/add"} element={<Add />} />
        <Route path={`/update/:userId`} element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}
