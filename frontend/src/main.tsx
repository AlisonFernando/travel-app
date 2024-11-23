import React from "react";
import ReactDOM from "react-dom/client";

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello from TypeScript Frontend with Vite!</h1>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
