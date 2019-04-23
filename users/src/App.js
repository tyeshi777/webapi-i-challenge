import React from "react";
import "./App.css";
import UserForm from "./userForm";
import axios from "axios";
import User from "./User";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/users")
      .then(res => {
        return this.setState({
          users: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    console.log("render", this.state.users);
    return (
      <div className="App">
        <h1>hello from users</h1>
        <UserForm />
        {this.state.users &&
          this.state.users.map(user => <User key={user.id} user={user} />)}
      </div>
    );
  }
}

export default App;
