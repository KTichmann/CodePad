import React from "react";
import ReactDom from "react-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

library.add(faStroopwafel);

//Components
import "./styles/main.scss"
import Menu from "./components/Menu";
import Input from "./components/Input";

class CodePad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "darcula",
      mode: "htmlmixed",
      fontSize: "10px",
      containerSize: {width: "100px", height: "100px"}
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
    this.setState({ containerSize: {width: width, height: height}});
    localStorage.setItem("codePadContainerWidth", width);
    localStorage.setItem("codePadContainerHeight", height);
  }
  render() {
    return (
      <div>
        <Menu changeTheme={this.changeTheme} changeMode={this.changeMode} changeFontSize={this.changeFontSize} changeContainerSize={this.changeContainerSize}/>
        <Input theme={this.state.theme} mode={this.state.mode} fontSize={this.state.fontSize} containerSize={this.state.containerSize}/>
      </div>
    );
  }
}

ReactDom.render(<CodePad />, document.getElementById("codePad"));