import React from 'react';
import ReactCodeMirror from 'react-cmirror';
import CodeMirror from 'codemirror';
import emmet from '@emmetio/codemirror-plugin';
import '../addons.js'

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
        // Register extension on CodeMirror constructor
        emmet(CodeMirror);
    }
    componentWillMount(){
        let text = localStorage.getItem("codePadText");<div></div>
        if(text){
            this.setState({text: text})
        }
    }
    componentDidUpdate(){
        localStorage.setItem("codePadText", this.state.text)
    }
    handleChange(editor){
        this.setState({text: editor.getValue()})
    }
    render(){
        let options = {
            mode: this.props.mode,
            theme: this.props.theme,
            matchBrackets: true,
            matchTags: true,
            autoCloseBrackets: true,
            extraKeys: {
                'Tab': 'emmetExpandAbbreviation',
                'Enter': 'emmetInsertLineBreak'
            }
        }
        return(
            <ReactCodeMirror options={options} onChange={(editor, data, value) => {this.handleChange(editor)}} value={this.state.text} width="300px" height="300px" />
        )
    }
}

export default Input;

/*
TODO: Allow changing width and height of input box
Allow changing font-size
Styling
*/