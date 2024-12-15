import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import CardPage from "./components/CardPage/CardPage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="info" element={<CardPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
