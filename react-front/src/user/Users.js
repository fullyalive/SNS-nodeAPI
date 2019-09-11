import React, { Component } from "react";
import { list } from "./apiUser";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    list().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        this.setState({ users: data });
      }
    });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h2>Users</h2>
        <div>
          {users.map((user, i) => (
            <div key={i}>
              <p>{user.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
