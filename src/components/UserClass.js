import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
      },
    };
    // console.log(this.props.name + "Constructor");
  }
  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/tanurawat2");
    // const jsondata = await data.json();
    // this.setState({
    //   userInfo: jsondata,
    // });
    // console.log(jsondata);

    this.timer = setInterval(() => {
      console.log("I am set interval inside componentDidMount");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component will unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
