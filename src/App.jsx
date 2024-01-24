import { useState } from "react";
import InputField from "./components/InputField";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="container">
      <InputField />
    </div>
  );
}

export default App;
