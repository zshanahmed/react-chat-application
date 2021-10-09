import { useState, useEffect } from "react";
import axios from "axios";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    var config = {
      method: "post",
      url: "https://api.chatengine.io/users/",
      headers: {
        "PRIVATE-KEY": `${process.env.REACT_APP_PRIVATE_KEY}`,
      },
      data: {
          "username": `${username}`, 
          "secret": `${password}`},
          "first_name": `${firstName}`,
          "last_name": `${lastName}`,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (password && confirmPassword && password !== confirmPassword) {
      setError("Passwords are not same!");
    } else {
      setError("");
    }
  }, [password, confirmPassword]);

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Signup</h1>
        <h4 align="center" style={{ color: "#FFF", marginBottom: "6px" }}>
          {error}
        </h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input"
            placeholder="Last Name"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input"
            placeholder="Confirm Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Signup</span>
            </button>
            <span style={{ color: "#FFF" }}>
              Already have an account? <a href="/login">Login</a>{" "}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
