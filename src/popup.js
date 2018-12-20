import React from "react";
import ReactDom from "react-dom";

//Styles
import "./styles/main.scss"

//Components
import Menu from "./components/Menu";
import Input from "./components/Input";

class CodePad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "darcula",
      mode: "htmlmixed",
      fontSize: "10px",
      width: "100px",
      height: "200px"
    };
    this.changeMode = this.changeMode.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
    this.changeFontSize = this.changeFontSize.bind(this);
    this.changeContainerSize = this.changeContainerSize.bind(this);
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
    localStorage.setItem("codePadFontSize", fontSize);
  }
  changeContainerSize(width, height){
    console.log(width, height)
    this.setState({ width: width, height: height });
    localStorage.setItem("codePadContainerWidth", width);
    localStorage.setItem("codePadContainerHeight", height);
  }
  render() {
    return (
      <div>
        <Menu changeTheme={this.changeTheme} changeMode={this.changeMode} changeFontSize={this.changeFontSize} changeContainerSize={this.changeContainerSize}/>
        <Input theme={this.state.theme} mode={this.state.mode} fontSize={this.state.fontSize} containerSize={{width: this.state.width, height: this.state.height}}/>
      </div>
    );
  }
}

ReactDom.render(<CodePad />, document.getElementById("codePad"));