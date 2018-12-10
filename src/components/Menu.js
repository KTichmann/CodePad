import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../addons/themes.js";
import "../addons/modes.js";

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    let theme = localStorage.getItem("codePadTheme");
    if (theme) {
      this.props.changeTheme(theme);
    }
    let mode = localStorage.getItem("codePadMode");
    if (mode) {
      this.props.changeMode(mode);
    }
    let fontSize = localStorage.getItem("codePadFontSize");
    if(fontSize){
      this.props.changeFontSize(fontSize);
    }
    let containerWidth = localStorage.getItem("codePadContainerWidth");
    let containerHeight = localStorage.getItem("codePadContainerHeight");
    if(containerWidth && containerHeight){
      this.props.changeContainerSize(containerWidth, containerHeight);
    }
  }
  render() {
    return (
      <div id="menu">
        <ion-icon name="heart"></ion-icon>
        <FontAwesomeIcon icon="faStroopwafel" onClick={() => {
          let selectors = document.getElementById("selectors")
          if(selectors.classList.contains("active")){
            selectors.classList.remove("active");
          } else{
            selectors.classList.add("active")
          }
          }} id="settings-button" />
        <div id="selectors">
          <select
            onChange={event => {
              this.props.changeTheme(event.target.value);
            }}
          >
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
          <select
            onChange={event => {
              this.props.changeMode(event.target.value);
            }}
          >
            <option value="htmlmixed">HTML</option>
            <option value="javascript">Javascript</option>
            <option value="css">CSS</option>
            <option value="vue">Vue</option>
            <option value="sass">SASS</option>
            <option value="coffeescript">Coffeescript</option>
            <option value="jsx">JSX/React</option>
          </select>
          <select onChange = {event => {this.props.changeFontSize(event.target.value)}}>
            <option value="10px">10px</option>
            <option value="12px">12px</option>
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            <option value="20px">20px</option>
            <option value="22px">22px</option>
            <option value="24px">24px</option>
          </select>
          <select onChange={event => {this.props.changeContainerSize(event.target.selectedOptions[0].getAttribute("data-width"), event.target.selectedOptions[0].getAttribute("data-height"))}}>
            <option value="Small" data-width="100px" data-height="200px">Small</option>
            <option value="Medium" data-width="400px" data-height="400px">Medium</option>
            <option value="Large" data-width="600px" data-height="500px">Large</option>
            <option value="X-Large" data-width="700px" data-height="500px">X-Large</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Menu;
