import { React } from "react";
import { Home } from "./components/Home";
function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-primary">Hello Bootstrap in React!</h1>
      <button className="btn btn-success">Click Me</button>
      <Home />
    </div>
  );
}

export default App;