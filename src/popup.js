import React from "react";
import ReactDom from "react-dom";

//Components
import Menu from "./components/Menu";
import Input from "./components/Input";

class CodePad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "darcula",
      mode: "htmlmixed"
    };
    this.changeMode = this.changeMode.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
  }
  changeMode(mode) {
    this.setState({ mode: mode });
    localStorage.setItem("codePadMode", mode);
  }
  changeTheme(theme) {
    this.setState({ theme: theme });
    localStorage.setItem("codePadTheme", theme);
  }
  render() {
    return (
      <div>
        <Menu changeTheme={this.changeTheme} changeMode={this.changeMode} />
        <Input theme={this.state.theme} mode={this.state.mode} />
      </div>
    );
  }
}

ReactDom.render(<CodePad />, document.getElementById("codePad"));
