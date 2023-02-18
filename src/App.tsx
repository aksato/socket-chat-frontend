import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    input: "",
  });

  const [messages, setMessages] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setMessages([...messages, formData.input]);
    setFormData({
      ...formData,
      input: "",
    });
  };

  return (
    <div className="App">
      <ul id="messages">
        {messages.map((msg) => (
          <li>{msg}</li>
        ))}
      </ul>
      <form id="form" action="">
        <input
          id="input"
          name="input"
          autoComplete="off"
          value={formData.input}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  );
}

export default App;
