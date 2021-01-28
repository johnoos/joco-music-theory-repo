// npm install @material-ui/core @material-ui/icons

import React, {Component} from 'react';

// website structure
import Header from '../header';
import Sidebar from '../sidebar';

// website content
import {  MusicHome,
          MusicTheoryCertificationLevels,
          ContactInfo,
          MusicTheoryFees, 
          MusicCredentials }
        from '../content-pages'; 

const ITEMS = [ 
  { index: 0, name: "overview", label: "Overview"},
  { index: 1, name: "music theory levels", label: "Music Theory Levels"},
  { index: 2, name: "contact-info", label: "Contact Us" },                    
  { index: 3, name: "fees", label: "Fees" },
  { index: 4, name: "credentials", label: "Tutor Credentials" }
];

const CONTENTCOMPONENTS = [ <MusicHome/>,
                            <MusicTheoryCertificationLevels/>,
                            <ContactInfo/>,  
                            <MusicTheoryFees/>,
                            <MusicCredentials/>             ]; 

class App extends Component {
  constructor (props) {
    super(props); 

    this.state = { 
      selectedPageComponent: <MusicHome/> 
    };
    this.onClick = this.onClick.bind(this); 
  }
  
  onClick(e, item) {
    this.setState({selectedPageComponent: CONTENTCOMPONENTS[item.index]});
  }

  render () {
    return (
      <div class="outer-div">
        <div class="header-container">
          <Header/>
        </div>  
        <div class="sidebar"> 
          <Sidebar items={ITEMS} onClickProp={this.onClick}/>
        </div>
        <div class="keyboard-image-outer">
          <div class="keyboard-image"></div>
        </div>    
        <div class="content-container">
          {this.state.selectedPageComponent}
        </div>
      </div>
    )};
  }  

export default App;
