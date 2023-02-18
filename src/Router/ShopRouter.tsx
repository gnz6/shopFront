import {  Routes, Route, Navigate } from "react-router-dom";
import { Homepage } from "../Pages/Homepage";
import { CarDetail } from "../Pages/CarDetail";

export const ShopRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:product_id" element={<CarDetail />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
