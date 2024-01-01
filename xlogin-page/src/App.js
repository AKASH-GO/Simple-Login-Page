import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [status, setStatus] = useState(null);
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { username, password } = formData;
    if (username === "user" && password === "password") {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }
  return (
    <>
      <h1>Login Page</h1>
      {status === "error" && <div>Invalid username or password</div>}
      {status === "success" ? (
        <div>Welcome, user!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
            value={formData.password}
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}

export default App;