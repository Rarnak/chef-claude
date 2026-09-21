import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"))
console.log("Main Component")
root.render(<>
    <h1>This is Main component</h1>
    <App />
</>)