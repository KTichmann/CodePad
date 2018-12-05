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
      mode: "htmlmixed",
      fontSize: "10px"
    };
    this.changeMode = this.changeMode.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.changeFontSize = this.changeFontSize.bind(this);
  }
  changeMode(mode) {
    this.setState({ mode: mode });
    localStorage.setItem("codePadMode", mode);
  }
  changeTheme(theme) {
    this.setState({ theme: theme });
    localStorage.setItem("codePadTheme", theme);
  }
  changeFontSize(fontSize){
    this.setState({ fontSize: fontSize });
    localStorage.setItem("codePadFontSize", fontSize)
  }
  render() {
    return (
      <div>
        <Menu changeTheme={this.changeTheme} changeMode={this.changeMode} changeFontSize={this.changeFontSize}/>
        <Input theme={this.state.theme} mode={this.state.mode} fontSize={this.state.fontSize}/>
      </div>
    );
  }
}

ReactDom.render(<CodePad />, document.getElementById("codePad"));