import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Comments from "./pages/Comments";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  );
}
