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
      containerSize: {
        width: "100px",
        height: "200px"
      }
    };
  }
  changeSetting(setting, value){
    this.setState({[setting]: value});
    let storageName = `codePad${setting}`;
    let storageValue = JSON.stringify(value);
    localStorage.setItem(storageName, storageValue);
  }
  render() {
    return (
      <div>
        <Menu changeTheme={(value) => {this.changeSetting('theme', value)}} changeMode={(value) => {this.changeSetting('mode', value)}} changeFontSize={(value) => {this.changeSetting('fontSize', value)}} changeContainerSize={(value) => {this.changeSetting('containerSize', JSON.parse(value))}}/>
        <Input theme={this.state.theme} mode={this.state.mode} fontSize={this.state.fontSize} containerSize={this.state.containerSize}/>
      </div>
    );
  }
}

ReactDom.render(<CodePad />, document.getElementById("codePad"));