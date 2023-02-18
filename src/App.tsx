import { useState, useEffect } from "react";
import "./App.css";
import io from "socket.io-client";

const SOCKETIO_HOST = "https://nodesocketioaksato.azurewebsites.net/";
const socket = io(SOCKETIO_HOST);

function App() {
  const [formData, setFormData] = useState({
    input: "",
  });

  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages((oldMessages) => [...oldMessages, msg]);
    });
  }, []);

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
    socket.emit("chat message", formData.input);
    setFormData({
      ...formData,
      input: "",
    });
  };

  return (
    <div className="App">
      <ul id="messages">
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <form id="form">
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
