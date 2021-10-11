import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import NavigationBar from "./components/Navbar";
import Signup from "./components/Signup";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: "",
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({ sessionToken: localStorage.getItem("token") });
    }
  }

  updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    this.setState({ sessionToken: newToken });
  };

  clearToken = () => {
    localStorage.clear();
    this.setState({ sessionToken: "" });
  };

  render() {
    return (
      <div className="App">
        <NavigationBar />
        {/* <LandingPage /> */}
        {/* <Login
          sessionToken={this.sessionToken}
          updateToken={this.updateToken}
        />
        <Signup
          sessionToken={this.sessionToken}
          updateToken={this.updateToken}
        /> */}
      </div>
    );
  }
}

export default App;
