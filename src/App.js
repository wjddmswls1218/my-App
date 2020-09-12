import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    return <div>Hello Wold</div>;
  }
}
export default App;