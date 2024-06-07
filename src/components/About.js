import User from "./User.js";
import UserClass from "./UserClass.js";
import React from "react";
import UserContext from "../utils/UserContext.js";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent ComponentDidMount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>This is our about us page</h1>
        {/* <UserClass name={"First"} location={"Rohtak"} /> */}
        <User name={"First"} location={"Rohtak"} />
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default About;
