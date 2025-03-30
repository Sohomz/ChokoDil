import React from "react";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

class UserClass extends React.Component {
  constructor(props) {
    //console.log("child constructor called");
    super(props);
    this.state = {
      count: 0,
      count1: 1,
      data: "Dummy Name",
    };
  }

  async componentDidMount() {
    //console.log("child component did mount is called");
    const gitApiData = await fetch("https://api.github.com/users/sohomz");
    //console.log("child component API is called");
    const convertedData = await gitApiData.json();
    this.setState({
      data: convertedData,
    });
    this.timer = setInterval(() => {
      //console.log("printing bad things");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count != prevState.count) {
      this.componentDidMount();
    }
    //console.log("child Component did update called");
  }

  componentWillUnmount() {
    // //console.log(
    //   "Child componentWillUnmount if going toother page that dont have it"
    // );
    clearInterval(this.timer);
  }

  render() {
    //console.log("child render called");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <h1>Name: {this.state.data.name + " from gitApi"}</h1>
        <h3>Location: {this.state.data.html_url}</h3>
        <h3>Contact: sohomd077@gmail.com</h3>
        <div className="flex">
          Logged In user:
          <UserContext.Consumer>
            {(userdata) => {
              return <h3> {userdata.loggedInUser}</h3>;
            }}
          </UserContext.Consumer>
        </div>
        <input
          type="button"
          value="btn"
          onClick={() => {
            this.setState({
              count: (this.state.count += 1),
              count1: (this.state.count += 1),
            });
          }}
        ></input>
      </div>
    );
  }
}
export default UserClass;
