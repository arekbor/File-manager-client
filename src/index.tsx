import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import reactQueryClient from "./utils/reactQueryClient";
import ManagerView from "./views/ManagerView/ManagerView";
import "./bootstrap.min.css";
import HomePage from "./views/HomePage/HomePage";
import UploadFile from "./views/UploadFile/UploadFile";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <QueryClientProvider client={reactQueryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<ManagerView />} />
        <Route path="/upload" element={<UploadFile />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
