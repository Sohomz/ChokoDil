import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// export default About = () => {
//   return (
//     <div>
//       <h1>This is About page</h1>
//       <User name={"Sohom Das (function)"} />
//       <UserClass name={"Sohom Das (class)"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    //console.log("Parent constructor called");
    super(props);
    this.props = props;
  }

  async componentDidMount() {
    //console.log("Parent componentDidMount called");
  }

  componentDidUpdate() {
    //console.log("Parent componentDidUpdate called");
  }

  render() {
    //console.log("Parent render called");
    return (
      <div>
        <h1>This is About page</h1>
        <User name="SohomDas (function)" />
        <UserClass />
      </div>
    );
  }
}
export default About;
