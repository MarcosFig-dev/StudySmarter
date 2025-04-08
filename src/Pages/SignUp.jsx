import { useState } from "react";
import { supabase } from "../supabaseClient";
import './SignUp.css';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName
        },
      },
    });

    if (error) {
      setMessage(error.message)
    }
    else {
      setMessage('Check your email to confirm sign up!')
    }
  }

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <div className="signup-form">
        <input
          className="signup-input"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <input
          className="signup-input"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <input
          className="signup-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="signup-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <button className="signup-button" onClick={handleSignup}>Sign Up</button>
        {message && <p className="signup-message">{message}</p>}
      </div>
    </div>
  );
}

export default SignUp