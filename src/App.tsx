import { Navigate, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import { pages } from "./routes";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {pages.map((page) => (
          <Route key={page.path} path={page.path} element={page.element} />
        ))}
        {/* Keep every old .html link working. */}
        {pages.map((page) => (
          <Route key={page.file} path={`/${page.file}`} element={page.element} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
