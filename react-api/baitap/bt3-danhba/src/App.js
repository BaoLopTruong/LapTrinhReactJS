import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContact from "./components/Add";
import List from "./components/List";
import UpdateContact from "./components/Update";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path={"/danhba/add"} element={<AddContact />} />
        <Route path={`/danhba/:contactId`} element={<UpdateContact />} />
      </Routes>
    </BrowserRouter>
  );
}
