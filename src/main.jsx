import ReactDOM from "react-dom/client";
import { lazy, Suspense } from "react";
// eslint-disable-next-line react-refresh/only-export-components
const App = lazy(() => import("./App.jsx"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense
    fallback={
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="font-normal text-xl">Loading...</h1>
      </div>
    }
  >
    <App />
  </Suspense>
);
