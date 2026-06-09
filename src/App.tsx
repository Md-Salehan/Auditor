// src/App.tsx
import { Route, Routes } from "react-router-dom";
import Main from "./layout";
import { About, Home } from "./pages";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Route>
    </Routes>
  );
}

export default App;