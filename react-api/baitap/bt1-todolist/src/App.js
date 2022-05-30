import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddToDo from "./components/AddToDo";
import ToDoList from "./components/ToDoList";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToDoList />} />
        <Route path={"/todo/add"} element={<AddToDo />} />
        {/* <Route path={`/user/:userId`} element={<UserDetails />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
