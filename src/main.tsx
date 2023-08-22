import ReactDOM from "react-dom/client";

import { App } from "./App.tsx";
import "./index.css";

const app = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

app.render(<App />);
