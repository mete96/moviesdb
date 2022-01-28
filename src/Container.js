import { useState } from "react";
import Header from "./Header";
import "./Container.css";
import { Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Navigate,
} from "react-router-dom";
export default function Container() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return <Navigate to="/homepage" />;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <Header />
      <div className="orta">
        <h2 class="h2">BOT CONTROL</h2>
        <p>What's the capital of Turkey?</p>
        <form onSubmit={handleSubmit}>
          <input
            value={answer}
            onChange={handleTextareaChange}
            disabled={status === "submitting"}
            className="texto"
          />
          <br />
          <button
            className="btn"
            disabled={answer.length === 0 || status === "submitting"}
          >
            {status === "submitting" ? "Loading..." : "Submit"}
          </button>
          {error !== null && <p className="Error">{error.message}</p>}
        </form>
      </div>
    </>
  );
}
function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "ankara";
      if (shouldError) {
        reject(new Error("Wrong! Answer must be 'Ankara'"));
      } else {
        resolve();
      }
    }, 1500);
  });
}
