import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey, faUser } from "@fortawesome/free-solid-svg-icons";


import './App.css';
function App() {

  return (
    <>
      <div id="outerBorder">
          <FontAwesomeIcon icon={faUser} alt="login_image" id="loginImage"/>
          <h1>Login</h1> 

        <div id="innerContainer">
          
          <div className="input-box">
            <FontAwesomeIcon icon={faEnvelope} id="emailIcon"/>
            <input type="email" placeholder="Email" required />
          </div>
          
          <br />
          
          <div className="input-box">  
            <FontAwesomeIcon icon={faKey} id="passwordIcon"/>
            <input type="password" placeholder="Password" required />
          </div>
          
          <div id="forgotContainer">
            <a href="#">Forgot Password ?</a>
          </div>
          
          <button id="loginButton" >Login</button>
        
        </div>
      </div>
    </>
  )
}

export default App
