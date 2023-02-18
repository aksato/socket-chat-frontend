import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    input: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="App">
      <form id="form" action="">
        <input
          id="input"
          name="input"
          autoComplete="off"
          value={formData.input}
          onChange={handleChange}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
