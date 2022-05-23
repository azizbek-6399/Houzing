import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// import { Home } from "../Components/Home";
import Navbar from "../Components/Navbar/index";
import { navbar } from "../Utils/navbar";
// import { Container } from "./style";

const Root = () => {
  return (
    <>
      <Routes>
        {navbar.map(({ path, Element, id, hidden }) => {
          return hidden && <Route path={path} element={Element} key={id} />;
        })}
        <Route element={<Navbar />}>
          {navbar.map(({ path, Element, id, hidden }) => {
            return !hidden && <Route path={path} element={Element} key={id} />;
          })}
          <Route path="/" element={<Navigate to={"/home"} />} />
        </Route>
        <Route path="*" element={<div>Not Found !</div>} />
      </Routes>
    </>
  );
};

export default Root;
