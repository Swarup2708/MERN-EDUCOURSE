import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import MaterialDetailPage from "./pages/MaterialDetailPage";
import InstructorPage from "./pages/InstructorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
     <Route path="/material/:id" element={<MaterialDetailPage />} />
      <Route path="/instructor/:name" element={<InstructorPage />} />
    </Routes>
  );
}

export default App;
