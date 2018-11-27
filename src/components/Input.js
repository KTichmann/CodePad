import React from "react";
import ReactCodeMirror from "react-cmirror";
import CodeMirror from "codemirror";
import emmet from "@emmetio/codemirror-plugin";
import beautify from "js-beautify";
import "../addons/addons.js";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    // Register extension on CodeMirror constructor
    emmet(CodeMirror);
    this.prettifyInput = this.prettifyInput.bind(this);
  }
  componentWillMount() {
    let text = localStorage.getItem("codePadText");
    <div />;
    if (text) {
      this.setState({ text: text });
    }
  }
  componentDidUpdate() {
    localStorage.setItem("codePadText", this.state.text);
  }
  handleChange(editor) {
    this.setState({ text: editor.getValue() });
  }
  prettifyInput() {
    switch(this.props.mode){
      case "htmlmixed":
        let beautifulText = beautify.html(this.state.text);
        break;
      case "css":
        let beautifulText = beautify.css(this.state.text);
        break;
      default:
        let beautifulText = beautify.js(this.state.text);
        break;
    }
    this.setState({text: beautifulText});
  }
  render() {
    let options = {
      mode: this.props.mode,
      theme: this.props.theme,
      matchBrackets: true,
      matchTags: true,
      autoCloseBrackets: true,
      extraKeys: {
        Tab: "emmetExpandAbbreviation",
        Enter: "emmetInsertLineBreak"
      }
    };
    return (
      <div>
        <ReactCodeMirror
          options={options}
          onChange={(editor, data, value) => {
            this.handleChange(editor);
          }}
          value={this.state.text}
          width="300px"
          height="300px"
        />
        <button onClick={this.prettifyInput}>Prettify</button>
      </div>
    );
  }
}

export default Input;

/*
TODO: Allow changing width and height of input box
Allow changing font-size
Styling
*/
