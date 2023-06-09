import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Comments from "./pages/Comments";
// import AboutUs from "./pages/AboutUs";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id/comments" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  );
}
