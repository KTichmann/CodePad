import React from "react";
import "../addons/themes.js";
import "../addons/modes.js";

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    let theme = localStorage.getItem("codePadtheme");
    if (theme) {
      this.props.changeTheme(theme);
    }
    let mode = localStorage.getItem("codePadmode");
    if (mode) {
      this.props.changeMode(mode);
    }
    let fontSize = localStorage.getItem("codePadfontSize");
    if(fontSize){
      this.props.changeFontSize(fontSize);
    }
    let containerSize = localStorage.getItem("codePadcontainerSize");
      if(containerSize){
        this.props.changeContainerSize(containerSize);
      }
  }
  componentDidMount(){
    //Settings Dropdowns:
    this.changeSetting('.themeChoice', this.props.changeTheme);
    this.changeSetting('.modeChoice', this.props.changeMode);
    this.changeSetting('.fontSizeChoice', this.props.changeFontSize);
    this.changeSetting('.sizeChoice', this.props.changeContainerSize);
  }
  changeSetting(settingClass, changeFunction){
    document.querySelectorAll(settingClass).forEach(node => {
      node.addEventListener('click', (event) => {
        changeFunction(event.target.dataset.value)
      })
    })
  }
  toggleActive(id){
    let selector = document.getElementById(id);
    if(selector.classList.contains("active")){
      selector.classList.remove("active");
    } else{
      selector.classList.add("active");
    }
  } 

  render() {
    return (
      <div id="menu">
        <img src="../src/images/settings.svg" onClick={() => this.toggleActive("selectors")} id="settings-button" />
        <div id="selectors">
          <div onClick={() => this.toggleActive("theme-selector")} id="theme-selector" className="selector">
            <span>Theme</span>
            <ul>
              <li className="themeChoice" data-value="eclipse">Day</li>
              <li className="themeChoice" data-value="3024-night">Night</li>
              <li className="themeChoice" data-value="ambiance">Charcoal Dark</li>
              <li className="themeChoice" data-value="elegant">Elegant</li>
              <li className="themeChoice" data-value="blackboard">Blackboard</li>
              <li className="themeChoice" data-value="cobalt">Stormy Skies</li>
              <li className="themeChoice" data-value="isotope">Neon</li>
              <li className="themeChoice" data-value="idea">Basic Light</li>
              <li className="themeChoice" data-value="the-matrix">The Matrix</li>
            </ul>
          </div>
          <div onClick={() => this.toggleActive("mode-selector")} id="mode-selector" className="selector">
            <span>Mode</span>
            <ul>
              <li className="modeChoice" data-value="htmlmixed">HTML</li>
              <li className="modeChoice" data-value="javascript">Javascript</li>
              <li className="modeChoice" data-value="css">CSS</li>
              <li className="modeChoice" data-value="vue">Vue</li>
              <li className="modeChoice" data-value="sass">SASS</li>
              <li className="modeChoice" data-value="coffeescript">Coffeescript</li>
              <li className="modeChoice" data-value="jsx">JSX/React</li>
            </ul>
          </div>
          <div onClick = {() => this.toggleActive("fontSize-selector")} id="fontSize-selector" className="selector">
            <span>Font Size</span>
            <ul>
              <li className="fontSizeChoice" data-value="10px">10px</li>
              <li className="fontSizeChoice" data-value="12px">12px</li>
              <li className="fontSizeChoice" data-value="14px">14px</li>
              <li className="fontSizeChoice" data-value="16px">16px</li>
              <li className="fontSizeChoice" data-value="18px">18px</li>
              <li className="fontSizeChoice" data-value="20px">20px</li>
              <li className="fontSizeChoice" data-value="22px">22px</li>
              <li className="fontSizeChoice" data-value="24px">24px</li>
            </ul>
          </div>
          <div onClick={() => this.toggleActive("size-selector")} id="size-selector" className="selector">
            <span>Container</span>
            <ul>
              <li className="sizeChoice" data-value={'{"width": "100px", "height": "200px"}'}>Small</li>
              <li className="sizeChoice" data-value={'{"width": "400px", "height": "400px"}'}>Medium</li>
              <li className="sizeChoice" data-value={'{"width": "600px", "height": "500px"}'}>Large</li>
              <li className="sizeChoice" data-value={'{"width": "700px", "height": "500px"}'}>X-Large</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
