import React from 'react';
import '../themes.js';
import '../modes.js';

class Menu extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        let theme = localStorage.getItem('codePadTheme')
        if(theme){
            this.props.changeTheme(theme)
        }
        let mode = localStorage.getItem('codePadMode')
        if(mode){
            this.props.changeMode(mode)
        }
    }
    render(){
        return(
            <div>
                <h1>CodePad</h1>
                <select onChange={event => {this.props.changeTheme(event.target.value)}}>
                    <option value="eclipse">Day</option>
                    <option value="3024-night">Night</option>
                    <option value="ambiance">Charcoal Dark</option>
                    <option value="elegant">Elegant</option>
                    <option value="blackboard">Blackboard</option>
                    <option value="cobalt">Stormy Skies</option>
                    <option value="isotope">Neon</option>
                    <option value="idea">Basic Light</option>
                    <option value="the-matrix">The Matrix</option>
                </select>
                <select onChange={event => {this.props.changeMode(event.target.value)}}>
                    <option value="htmlmixed">HTML</option>
                    <option value="javascript">Javascript</option>
                    <option value="css">CSS</option>
                    <option value="vue">Vue</option>
                    <option value="sass">SASS</option>
                    <option value="coffeescript">Coffeescript</option>
                    <option value="jsx">JSX/React</option>
                </select>
            </div>
        )
    }
}

export default Menu;