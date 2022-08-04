import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("__weekly");
const root = createRoot(container as Element);

root.render(<App />);
