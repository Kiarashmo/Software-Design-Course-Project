import React, { useState } from 'react';
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Navbar from './components/Navbar'

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin",
  }

  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details)
  }

  const Logout = () => {
    console.log("Logout");
  }

  return (
    <div className="App">
<<<<<<< HEAD
      <LoginForm/>
=======
      <Navbar />
      <RegisterForm/>
>>>>>>> 2e242a0348e8dd6e010e4f3b2f9573e201a845d5
    </div>
  );
}

export default App;
