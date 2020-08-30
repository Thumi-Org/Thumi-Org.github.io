import React from 'react';

class Menu extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav id="menu">
        <h2>துமி அமையம்</h2>
        <ul>
          <li><a href="#">முகப்பு</a></li>
          <li><a href="#contact-us">தொடர்புகளுக்கு</a></li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
