import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactQueryClient from "./utils/reactQueryClient";
import ManagerView from "./views/ManagerView";
import "./bootstrap.min.css";
import HomePage from "./views/HomePage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <QueryClientProvider client={reactQueryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<ManagerView />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
